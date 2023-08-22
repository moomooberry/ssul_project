import { FC } from "react";
import HomeView, { HomeViewProps } from "./HomeView";
import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/post/getPostList";

interface HomeControllerProps {
  isAdmin: boolean;
}

const HomeController: FC<HomeControllerProps> = ({ isAdmin }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["/post"],
    queryFn: getPostList,
  });

  const viewProps: HomeViewProps = { isAdmin, isLoading, data };

  return <HomeView {...viewProps} />;
};

export default HomeController;
