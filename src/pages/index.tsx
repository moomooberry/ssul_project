import HomeController from "@/screens/home/HomeController";
import { CommonCategory, CommonRank } from "@/types/common";
import isValidCategory from "@/utils/isValidCategory";
import isValidRank from "@/utils/isValidRank";
import { GetServerSideProps, NextPage } from "next";

interface HomePageProps {
  initialCategory: CommonCategory | "all";
  initialRank: CommonRank;
}

const HomePage: NextPage<HomePageProps> = ({
  initialCategory,
  initialRank,
}) => (
  <HomeController
    isAdmin={false}
    initialCategory={initialCategory}
    initialRank={initialRank}
  />
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category, rank } = query;
  const initialCategory = isValidCategory(category) ? category : "all";
  const initialRank = isValidRank(rank) ? rank : "created";

  return {
    props: {
      initialCategory,
      initialRank,
    },
  };
};

export default HomePage;
