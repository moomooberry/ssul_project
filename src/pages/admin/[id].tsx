import getAccessToken from "@/api/auth/getAccessToken";
import verification from "@/api/auth/verification";
import getDetailPost from "@/api/post/getDetailPost";
import AdminFormController from "@/screens/admin/form/AdminFormController";
import { wrapper } from "@/store";
import { setToken } from "@/store/modules/auth";
import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import { GetServerSideProps, NextPage } from "next";
interface AdminEditPageProps {
  id: string;
  initialData: GetDetailPostResponse;
}

const AdminEditPage: NextPage<AdminEditPageProps> = ({ id, initialData }) => (
  <AdminFormController id={id} initialData={initialData} />
);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params, req }) => {
    if (!params?.id || typeof params.id !== "string") return { notFound: true };

    const id = params.id;
    const refreshToken = req.cookies["you_and_my_story_refresh_token"];
    const accessToken = store.getState().auth.token;
    try {
      await verification({ refreshToken });
      // accessToken 있는경우
      const initialData = await getDetailPost({
        id,
        accessToken,
      });
      return {
        props: {
          id: params.id,
          initialData,
        },
      };
    } catch (e) {
      try {
        // accessToken이 없거나 유효하지 않은 경우
        const newAccessToken = await getAccessToken({ refreshToken });
        const { payload: accessToken } = store.dispatch(
          setToken(newAccessToken)
        );

        const initialData = await getDetailPost({
          id,
          accessToken,
        });
        return {
          props: {
            id: params.id,
            initialData,
          },
        };
      } catch (e) {
        // refreshToken이 없거나 유효하지 않은 경우
        return {
          redirect: {
            destination: "/auth/login",
            permanent: true,
          },
        };
      }
    }
  });

export default AdminEditPage;
