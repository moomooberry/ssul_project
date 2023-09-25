import { FC, useCallback, useEffect, useState } from "react";
import HomeView, { HomeViewProps } from "./HomeView";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import getPostList from "@/api/post/getPostList";
import useBoolean from "@/hooks/useBoolean";
import { useRouter } from "next/router";
import { CommonCategory, CommonRank } from "@/types/common";

interface HomeControllerProps {
  isAdmin: boolean;
  initialCategory: CommonCategory | "all";
  initialRank: CommonRank;
}

const HomeController: FC<HomeControllerProps> = ({
  isAdmin,
  initialCategory,
  initialRank,
}) => {
  const [category, setCategory] = useState<CommonCategory | "all">(
    initialCategory
  );

  const [rank, setRank] = useState<CommonRank>(initialRank);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["/post", { category }],
    queryFn: ({ pageParam = 1 }) =>
      getPostList({ p: pageParam, ps: 10, category }),
    getNextPageParam: (lastPage) => {
      if (lastPage.totalPages === 0) return undefined;
      return lastPage.page !== lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const onFetchObserve = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const router = useRouter();

  const onCategoryClick = useCallback(
    (category: CommonCategory | "all") => {
      const onClick = () => {
        setCategory(category);
        router.push(
          {
            pathname: router.pathname,
            query: {
              ...router.query,
              category,
            },
          },
          undefined,
          {
            scroll: true,
            shallow: true,
          }
        );
      };
      return onClick;
    },
    [router]
  );

  const onRankClick = useCallback(
    (rank: CommonRank) => {
      const onClick = () => {
        setRank(rank);
        router.push(
          {
            pathname: router.pathname,
            query: {
              ...router.query,
              rank,
            },
          },
          undefined,
          {
            scroll: true,
            shallow: true,
          }
        );
      };

      return onClick;
    },
    [router]
  );

  const viewProps: HomeViewProps = {
    isAdmin,
    isLoading,
    HeaderProps: {
      isAdmin,
      categoryProps: {
        value: category,
        onChange: onCategoryClick,
      },
      rankProps: {
        value: rank,
        onChange: onRankClick,
      },
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
