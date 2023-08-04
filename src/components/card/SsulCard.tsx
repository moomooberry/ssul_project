import { FC, useCallback, useRef } from "react";
import styled from "styled-components";
import CalendarIcon from "../icons/CalendarIcon";
import EyeIcon from "../icons/EyeIcon";
import SkeletonBox from "../box/SkeletonBox";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Card = styled.div`
  min-width: 340px;
  max-width: 340px;
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
  background-color: #fff;
  cursor: pointer;
`;

const CardImage = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 15px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const CardNoImage = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: #d3d3d3;
`;

const CardDateViewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  min-width: 100px;
  overflow: hidden;
  font-size: 13px;
  color: #999999;
  gap: 4px;
`;

const CardView = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  min-width: 100px;
  overflow: hidden;
  font-size: 13px;
  color: #999999;
  gap: 4px;
`;

const CardTitle = styled.span`
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: bold;
  color: #191919;
`;

export interface SSulCardProps {
  date: string;
  views: number;
  title: string;
  imgSrc?: string | StaticImageData;
  link: string;
  isLoading: boolean;
}

const SsulCard: FC<SSulCardProps> = ({
  date,
  views,
  title,
  imgSrc,
  link,
  isLoading,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const scale = useCallback((size: number) => {
    const eventHandler = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = `scale(${size})`;
        cardRef.current.style.transition = `transform 0.2s`;
      } else {
        console.log("something wrong");
      }
    };
    return eventHandler;
  }, []);

  const onCardClick = useCallback(() => {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 300);
  }, [link]);

  return (
    <Card
      ref={cardRef}
      onMouseEnter={scale(1.05)}
      onMouseLeave={scale(1)}
      onMouseDown={scale(0.95)}
      onMouseUp={scale(1.05)}
      onClick={isLoading ? undefined : onCardClick}
    >
      <CardImage>
        {!isLoading && imgSrc && (
          <Image src={imgSrc} alt="image" width={260} height={160} />
        )}
        {!isLoading && !imgSrc && <CardNoImage>SSUL</CardNoImage>}
        {isLoading && <SkeletonBox />}
      </CardImage>
      <CardDateViewWrapper>
        <CardDate>
          <CalendarIcon w={16} />
          {isLoading ? <SkeletonBox /> : date}
        </CardDate>
        <CardView>
          <EyeIcon w={16} />
          {isLoading ? <SkeletonBox /> : `${views.toLocaleString()}명`}
        </CardView>
      </CardDateViewWrapper>
      <CardTitle>
        {isLoading ? (
          <>
            <SkeletonBox $h="20px" />
            <br />
            <SkeletonBox $h="20px" />
          </>
        ) : (
          title
        )}
      </CardTitle>
    </Card>
  );
};

export default SsulCard;
