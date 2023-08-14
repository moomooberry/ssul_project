import getDetailPost from "@/api/post/getDetailPost";
import AdminFormController from "@/screens/admin/form/AdminFormController";
import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import { GetServerSideProps, NextPage } from "next";

interface AdminEditPageProps {
  id: string;
  initialData: GetDetailPostResponse;
}

const AdminEditPage: NextPage<AdminEditPageProps> = ({ id, initialData }) => (
  <AdminFormController id={id} initialData={initialData} />
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id || typeof params.id !== "string") return { notFound: true };
  const id = params.id;
  const initialData = await getDetailPost({ id });
  return {
    props: {
      id: params.id,
      initialData,
    },
  };
};

export default AdminEditPage;
