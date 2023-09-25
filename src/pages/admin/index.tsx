import verification from "@/api/auth/verification";
import HomeController from "@/screens/home/HomeController";
import { CommonCategory, CommonRank } from "@/types/common";
import isValidCategory from "@/utils/isValidCategory";
import isValidRank from "@/utils/isValidRank";
import { GetServerSideProps, NextPage } from "next";

interface AdminPageProps {
  initialCategory: CommonCategory | "all";
  initialRank: CommonRank;
}

const AdminPage: NextPage<AdminPageProps> = ({
  initialCategory,
  initialRank,
}) => (
  <HomeController
    isAdmin={true}
    initialCategory={initialCategory}
    initialRank={initialRank}
  />
);

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { category, rank } = query;
  const initialCategory = isValidCategory(category) ? category : "all";
  const initialRank = isValidRank(rank) ? rank : "created";

  try {
    const refreshToken = req.cookies["you_and_my_story_refresh_token"];
    await verification({ refreshToken });
    return {
      props: {
        initialCategory,
        initialRank,
      },
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
