import { FC } from "react";
import UI from "./components/styled";
import dayjs from "dayjs";
import SsulCard from "@/components/card/SsulCard";
import AddCard from "@/components/card/AddCard";
import { GetPostListResponse } from "@/types/api/post/getPostList";
import SkeletonCard from "@/components/card/SkeletonCard";
import Observer, { ObserverProps } from "@/components/observer";
import { InfiniteData } from "@tanstack/react-query";
import { PaginationResponse } from "@/types/api";

export interface HomeViewProps {
  isAdmin: boolean;
  isLoading: boolean;
  isTitleSticky: boolean;
  stickyObserverProps: ObserverProps;
  fetchObserverProps: ObserverProps;
  data?: InfiniteData<PaginationResponse<GetPostListResponse>>;
}

const HomeView: FC<HomeViewProps> = ({
  isAdmin,
  isLoading,
  isTitleSticky,
  stickyObserverProps,
  fetchObserverProps,
  data,
}) => (
  <UI.Layout>
    <UI.Container>
      <Observer {...stickyObserverProps} />
      <UI.Title $isSticky={isTitleSticky}>
        📚 You and My Story{" "}
        {isAdmin && <span style={{ color: "red" }}>관리자</span>}{" "}
      </UI.Title>
      <UI.CardWrapper>
        {isAdmin && <AddCard />}
        {isLoading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
        {!isLoading &&
          data?.pages.map((items) => {
            return items.results.map((item) => (
              <SsulCard
                key={item.id}
                id={item.id}
                date={dayjs(item.created).format("YYYY.MM.DD")}
                views={item.views}
                title={item.title}
                imgSrc={item.imgSrc}
                link={item.link}
                hashtags={item.hashtags}
                category={item.category}
                isAdmin={isAdmin}
              />
            ));
          })}
      </UI.CardWrapper>
      <Observer {...fetchObserverProps} />
    </UI.Container>
  </UI.Layout>
);

export default HomeView;
