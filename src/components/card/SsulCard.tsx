import { FC, MouseEventHandler, useCallback, useRef } from "react";
import styled from "styled-components";
import CalendarIcon from "../icons/CalendarIcon";
import EyeIcon from "../icons/EyeIcon";
import SkeletonBox from "../box/SkeletonBox";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import HashtagBadge from "../badge/HashtagBadge";

const Card = styled.div`
  justify-content: space-between;
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
  position: relative;
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

const CardTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.5px;
  font-weight: bold;
  color: #191919;
  margin-bottom: 12px;
`;

const HashtagWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const DeleteButton = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: #ffe2e4;
  @keyframes rotationKey {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  &:hover {
    animation-name: rotationKey;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const EditButton = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: #ffeed7;
  @keyframes rotationKey {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  &:hover {
    animation-name: rotationKey;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export interface SSulCardProps {
  id: number;
  title: string;
  link: string;
  date: string;
  views: number;
  imgSrc?: string | StaticImageData;
  hashtags?: string[];
  isLoading: boolean;
  isAdmin: boolean;
}

const SsulCard: FC<SSulCardProps> = ({
  id,
  title,
  link,
  date,
  views,
  imgSrc,
  hashtags,
  isLoading,
  isAdmin,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const cardScaleHandler = useCallback((size: number) => {
    const eventHandler = () => {
      const target = cardRef.current;
      if (target) {
        target.style.transform = `scale(${size})`;
        target.style.transition = `transform 0.2s`;
      } else {
        console.log("no target error");
      }
    };
    return eventHandler;
  }, []);

  const cardColorHandler = useCallback((color: string) => {
    const eventHandler = () => {
      const target = cardRef.current;
      if (target) {
        target.style.backgroundColor = color;
        target.style.transition = `backgroundColor 1.2s`;
      } else {
        console.log("no target error");
      }
    };
    return eventHandler;
  }, []);

  const onCardClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      setTimeout(() => {
        window.open(link, "_blank");
      }, 300);
    },
    [link]
  );

  const onDeleteClick = useCallback(() => {
    const accept = window.confirm("삭제할까?");
    if (accept) {
      // delte-api
      console.log("삭제 ㅇㅋ");
    }
  }, []);

  const onEditClick = useCallback(() => {
    router.push(`/admin/${id}`);
  }, [router, id]);

  return (
    <Card
      ref={cardRef}
      onMouseEnter={cardScaleHandler(1.05)}
      onMouseLeave={cardScaleHandler(1)}
      onMouseDown={cardScaleHandler(0.95)}
      onMouseUp={cardScaleHandler(1.05)}
      onClick={isLoading || isAdmin ? undefined : onCardClick}
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
      <HashtagWrapper>
        {hashtags &&
          hashtags.map((item, index) => (
            <HashtagBadge key={index} text={item} />
          ))}
      </HashtagWrapper>
      {isAdmin && (
        <ButtonWrapper>
          <EditButton
            onMouseEnter={cardColorHandler("#ffeed7")}
            onMouseLeave={cardColorHandler("#ffffff")}
            onMouseDown={cardColorHandler("#ff8400")}
            onMouseUp={cardColorHandler("#ffeed7")}
            onClick={onEditClick}
          >
            <EditIcon w={60} />
          </EditButton>
          <DeleteButton
            onMouseEnter={cardColorHandler("#ffe2e4")}
            onMouseLeave={cardColorHandler("#ffffff")}
            onMouseDown={cardColorHandler("#fa535f")}
            onMouseUp={cardColorHandler("#ffe2e4")}
            onClick={onDeleteClick}
          >
            <DeleteIcon w={60} />
          </DeleteButton>
        </ButtonWrapper>
      )}
    </Card>
  );
};

export default SsulCard;
