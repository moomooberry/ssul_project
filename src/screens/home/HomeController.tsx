import { FC, useCallback, useEffect } from "react";
import HomeView, { HomeViewProps } from "./HomeView";
import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/post/getPostList";
import useBoolean from "@/hooks/useBoolean";

interface HomeControllerProps {
  isAdmin: boolean;
}

const HomeController: FC<HomeControllerProps> = ({ isAdmin }) => {
  const {
    value: isTitleSticky,
    setTrue: setIsTitleStickyTrue,
    setFalse: setIsTitleStickyFalse,
  } = useBoolean(false);

  const onObserve = useCallback(() => {
    setIsTitleStickyFalse();
  }, [setIsTitleStickyFalse]);

  const onUnObserve = useCallback(() => {
    setIsTitleStickyTrue();
  }, [setIsTitleStickyTrue]);

  const { data, isLoading } = useQuery({
    queryKey: ["/post"],
    queryFn: getPostList,
  });

  const viewProps: HomeViewProps = {
    isAdmin,
    isLoading,
    isTitleSticky,
    observerProps: {
      config: { root: null, rootMargin: "0px", threshold: 1 },
      onObserve,
      onUnObserve,
    },
    data,
  };

  return <HomeView {...viewProps} />;
};

export default HomeController;
