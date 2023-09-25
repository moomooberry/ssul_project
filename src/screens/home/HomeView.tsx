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
import ListIcon from "@/components/icons/header/ListIcon";
import Header, { HeaderProps } from "@/components/header";

export interface HomeViewProps {
  isAdmin: boolean;
  isLoading: boolean;
  HeaderProps: HeaderProps;
  fetchObserverProps: ObserverProps;
  data?: InfiniteData<PaginationResponse<GetPostListResponse>>;
}

const HomeView: FC<HomeViewProps> = ({
  isAdmin,
  isLoading,
  HeaderProps,
  fetchObserverProps,
  data,
}) => (
  <UI.Layout>
    <UI.Container>
      <Header {...HeaderProps} />
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
