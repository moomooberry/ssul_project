import verification from "@/api/auth/verification";
import HomeController from "@/screens/home/HomeController";
import { GetServerSideProps, NextPage } from "next";

const AdminPage: NextPage = () => <HomeController isAdmin={true} />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const refreshToken = req.cookies["you_and_my_story_refresh_token"];
    await verification({ refreshToken });
    return {
      props: {},
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
};

export default AdminPage;
