import FlexBox from "@/components/box/FlexBox";
import { FC } from "react";
import UI from "./components/styled";
import Image from "next/image";
import dayjs from "dayjs";
import EyeIcon from "@/components/icons/EyeIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import SsulCard from "@/components/card/SsulCard";
import Link from "next/link";
import TestImgSrc from "@/test/images/testImageLong.jpg";
import AddCard from "@/components/card/AddCard";

export interface HomeViewProps {
  isAdmin: boolean;
}

const HomeView: FC<HomeViewProps> = ({ isAdmin }) => (
  <UI.Layout>
    <UI.Container>
      <UI.Title>
        📚 You and My Story{" "}
        {isAdmin && <span style={{ color: "red" }}>관리자</span>}{" "}
      </UI.Title>
      <UI.CardWrapper>
        {isAdmin && <AddCard />}
        <SsulCard
          id={0}
          date=""
          views={0}
          title=""
          imgSrc=""
          link=""
          hashtags={undefined}
          isLoading={true}
          isAdmin={isAdmin}
        />
        <SsulCard
          id={1}
          date={dayjs().format("YYYY.MM.DD")}
          views={0}
          title="제목 입니다2"
          imgSrc={undefined}
          link="https://www.naver.com"
          hashtags={undefined}
          isLoading={false}
          isAdmin={isAdmin}
        />
        <SsulCard
          id={2}
          date={dayjs().format("YYYY.MM.DD")}
          views={9999}
          title="제목 입니다3"
          imgSrc={TestImgSrc}
          link="https://www.naver.com"
          isLoading={false}
          hashtags={["#안녕", "#하세요"]}
          isAdmin={isAdmin}
        />
        <SsulCard
          id={3}
          date={dayjs().format("YYYY.MM.DD")}
          views={9999}
          title="길어져버린 제목 입니다길어져버린 제목 입니다. 길어져버린 제목 입니다 길어져버린 제목 입니다"
          imgSrc={TestImgSrc}
          link="https://www.naver.com"
          hashtags={["#길어버린해시태그", "#테스트", "#해시태그", "#입니다"]}
          isLoading={false}
          isAdmin={isAdmin}
        />
      </UI.CardWrapper>
    </UI.Container>
  </UI.Layout>
);

export default HomeView;
