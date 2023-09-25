import { FC, MouseEventHandler, useCallback, useState } from "react";
import styled from "styled-components";
import Observer, { ObserverProps } from "../observer";
import ListIcon from "../icons/header/ListIcon";
import useBoolean from "@/hooks/useBoolean";
import { CommonCategory, CommonRank } from "@/types/common";
import FilterBadge from "../badge/FilterBadge";
import { Variants, motion, useCycle } from "framer-motion";
import YoutubeIcon from "../icons/header/YoutubeIcon";
import InstagramIcon from "../icons/header/InstagramIcon";
import FaceBookIcon from "../icons/header/FaceBookIcon";
import { useRouter } from "next/router";

const StyledHeader = styled.div<{ $isSticky: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffffff;
  width: ${({ $isSticky }) => ($isSticky ? "100vw" : "700px")};
  padding: ${({ $isSticky }) => ($isSticky ? "16px 20px" : "20px 40px")};
  border-radius: ${({ $isSticky }) => ($isSticky ? 0 : "15px")};
  transition: width 1s, padding 1s, border-radius 3s;

  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
  @media (max-width: 1024px) {
    width: ${({ $isSticky }) => ($isSticky ? `calc(100% + 40px)` : `100%`)};
    padding: ${({ $isSticky }) => ($isSticky ? `15px 20px` : `30px 30px`)};
    border-radius: ${({ $isSticky }) => ($isSticky ? "0px" : "15px")};
    transition: width 1s, padding 1s;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1<{ $isSticky: boolean }>`
  font-size: ${({ $isSticky }) => ($isSticky ? "24px" : "36px")};
  font-weight: 400;
  letter-spacing: -0.54px;
  transition: font-size 1s;
  @media (max-width: 1024px) {
    font-size: ${({ $isSticky }) => ($isSticky ? "20px" : "24px")};
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #535353;
  :hover {
  }
`;

const ListWrapper = styled(motion.nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const StyledSpan = styled.span`
  color: #535353;
  font-size: 12px;
`;

const BadgeWrapper = styled.div<{ $isSticky: boolean }>`
  display: flex;
  gap: 10px;
  overflow: scroll;

  width: calc(100%);
  margin-left: ${({ $isSticky }) => ($isSticky ? "-10px" : "-20px")};
  padding: ${({ $isSticky }) => ($isSticky ? "0 10px" : "0 20px")};
`;

const NavigationVariants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
    display: "none",
  },
  open: {
    height: "auto",
    opacity: 1,
    display: "flex",
    marginTop: "20px",
    borderTop: "1px solid #e3e3e3",
    paddingTop: "10px",
  },
  closed: {
    height: 0,
    opacity: 0,
    display: "flex",
    visibility: "hidden",
  },
};

export interface HeaderProps {
  isAdmin: boolean;
  categoryProps: {
    value: CommonCategory | "all";
    onChange: (category: CommonCategory | "all") => () => void;
  };
  rankProps: {
    value: CommonRank;
    onChange: (rank: CommonRank) => () => void;
  };
}

const Header: FC<HeaderProps> = ({ isAdmin, categoryProps, rankProps }) => {
  const [isOpen, toggle] = useCycle(false, true);

  const {
    value: isSticky,
    setTrue: setIsStickyTrue,
    setFalse: setIsStickyFalse,
  } = useBoolean(false);

  const onObserve = useCallback(() => {
    setIsStickyFalse();
  }, [setIsStickyFalse]);

  const onUnObserve = useCallback(() => {
    setIsStickyTrue();
  }, [setIsStickyTrue]);

  const onListClick = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <>
      <Observer
        config={{
          root: null,
          rootMargin: "0px",
          threshold: 1,
        }}
        onObserve={onObserve}
        onUnObserve={onUnObserve}
      />
      <StyledHeader $isSticky={isSticky}>
        <TitleWrapper>
          <div />
          <Title $isSticky={isSticky}>
            📚 You and My Story{" "}
            {isAdmin && <span style={{ color: "red" }}>관리자</span>}{" "}
          </Title>
          <IconWrapper onClick={onListClick}>
            <ListIcon w={isSticky ? 20 : 24} />
          </IconWrapper>
        </TitleWrapper>
        <ListWrapper
          initial="initial"
          animate={isOpen ? "open" : "closed"}
          variants={NavigationVariants}
        >
          <StyledSpan>Category</StyledSpan>

          <BadgeWrapper $isSticky={isSticky}>
            <FilterBadge
              text="전체"
              onClick={categoryProps.onChange("all")}
              isSelected={categoryProps.value === "all"}
            />
            <FilterBadge
              text="🤡 유머"
              onClick={categoryProps.onChange("humor")}
              isSelected={categoryProps.value === "humor"}
            />
            <FilterBadge
              text="⚽️ 스포츠"
              onClick={categoryProps.onChange("sports")}
              isSelected={categoryProps.value === "sports"}
            />
            <FilterBadge
              text="🚨 사건사고"
              onClick={categoryProps.onChange("accident")}
              isSelected={categoryProps.value === "accident"}
            />
            <FilterBadge
              text="🐶 동물"
              onClick={categoryProps.onChange("animal")}
              isSelected={categoryProps.value === "animal"}
            />
            <FilterBadge
              text="💸 경제"
              onClick={categoryProps.onChange("economy")}
              isSelected={categoryProps.value === "economy"}
            />
            <FilterBadge
              text="🎶 연예"
              onClick={categoryProps.onChange("entertainments")}
              isSelected={categoryProps.value === "entertainments"}
            />
            <FilterBadge
              text="🧹 생활"
              onClick={categoryProps.onChange("life")}
              isSelected={categoryProps.value === "life"}
            />
            <FilterBadge
              text="💼 정치"
              onClick={categoryProps.onChange("politics")}
              isSelected={categoryProps.value === "politics"}
            />
          </BadgeWrapper>
          <StyledSpan>Ranked</StyledSpan>
          <BadgeWrapper $isSticky={isSticky}>
            <FilterBadge
              text="🔥 최신순"
              onClick={rankProps.onChange("created")}
              isSelected={rankProps.value === "created"}
            />
            {/* <FilterBadge
              text="👀 조회순"
              onClick={rankProps.onChange("view")}
              isSelected={rankProps.value === "view"}
            />
            <FilterBadge
              text="💖 좋아요순"
              onClick={rankProps.onChange("liked")}
              isSelected={rankProps.value === "liked"}
            /> */}
          </BadgeWrapper>
        </ListWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
