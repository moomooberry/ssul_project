import { FC } from "react";
import UI from "./components/styled";
import dayjs from "dayjs";
import SsulCard from "@/components/card/SsulCard";
import AddCard from "@/components/card/AddCard";
import { GetPostListResponse } from "@/types/api/post/getPostList";
import SkeletonCard from "@/components/card/SkeletonCard";
import Observer, { ObserverProps } from "@/components/observer";

export interface HomeViewProps {
  isAdmin: boolean;
  isLoading: boolean;
  isTitleSticky: boolean;
  observerProps: ObserverProps;
  data?: GetPostListResponse;
}

const HomeView: FC<HomeViewProps> = ({
  isAdmin,
  isLoading,
  isTitleSticky,
  observerProps,
  data,
}) => (
  <UI.Layout>
    <UI.Container>
      <Observer {...observerProps} />
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
          data?.map((item) => (
            <SsulCard
              key={item.id}
              id={item.id}
              date={dayjs(item.created).format("YYYY.MM.DD")}
              views={item.views}
              title={item.title}
              imgSrc={item.imgSrc}
              link={item.link}
              hashtags={item.hashtags}
              isAdmin={isAdmin}
            />
          ))}
      </UI.CardWrapper>
    </UI.Container>
  </UI.Layout>
);

export default HomeView;
