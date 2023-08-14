import { FC } from "react";
import HomeView, { HomeViewProps } from "./HomeView";

interface HomeControllerProps {
  isAdmin: boolean;
}

const HomeController: FC<HomeControllerProps> = ({ isAdmin }) => {
  const viewProps: HomeViewProps = { isAdmin };

  return <HomeView {...viewProps} />;
};

export default HomeController;
