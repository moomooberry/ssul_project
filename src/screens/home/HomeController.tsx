import { FC, useCallback, useEffect } from "react";
import HomeView, { HomeViewProps } from "./HomeView";
import { useInfiniteQuery } from "@tanstack/react-query";
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

  const onStickyObserve = useCallback(() => {
    setIsTitleStickyFalse();
  }, [setIsTitleStickyFalse]);

  const onStickyUnObserve = useCallback(() => {
    setIsTitleStickyTrue();
  }, [setIsTitleStickyTrue]);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["/post"],
    queryFn: async ({ pageParam = 1 }) => getPostList({ p: pageParam, ps: 10 }),
    getNextPageParam: (lastPage) => {
      return lastPage.page !== lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const onFetchObserve = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const viewProps: HomeViewProps = {
    isAdmin,
    isLoading,
    isTitleSticky,
    stickyObserverProps: {
      config: { root: null, rootMargin: "0px", threshold: 1 },
      onObserve: onStickyObserve,
      onUnObserve: onStickyUnObserve,
    },
    fetchObserverProps: {
      config: { root: null, rootMargin: "0px", threshold: 0.5 },
      minHeight: "50px",
      onObserve: onFetchObserve,
    },
    data,
  };

  return <HomeView {...viewProps} />;
};

export default HomeController;
