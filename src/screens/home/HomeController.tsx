import { FC, useCallback, useState } from "react";
import HomeView, { HomeViewProps } from "./HomeView";

const HomeController: FC = () => {
  const viewProps: HomeViewProps = {};

  return <HomeView {...viewProps} />;
};

export default HomeController;
