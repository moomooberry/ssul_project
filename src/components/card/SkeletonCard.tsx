import { FC, useCallback, useRef } from "react";
import styled from "styled-components";
import CalendarIcon from "../icons/card/CalendarIcon";
import EyeIcon from "../icons/card/EyeIcon";
import SkeletonBox from "../box/SkeletonBox";

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

const SkeletonCard: FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const cardScaleHandler = useCallback((size: number) => {
    const eventHandler = () => {
      const target = cardRef.current;
      if (target) {
        target.style.transform = `scale(${size})`;
        target.style.transition = `transform 0.2s`;
      }
    };
    return eventHandler;
  }, []);

  return (
    <Card
      ref={cardRef}
      onMouseEnter={cardScaleHandler(1.05)}
      onMouseLeave={cardScaleHandler(1)}
      onMouseDown={cardScaleHandler(0.95)}
      onMouseUp={cardScaleHandler(1.05)}
    >
      <CardImage>
        <SkeletonBox />
      </CardImage>
      <CardDateViewWrapper>
        <CardDate>
          <CalendarIcon w={16} />
          <SkeletonBox />
        </CardDate>
        <CardView>
          <EyeIcon w={16} />
          <SkeletonBox />
        </CardView>
      </CardDateViewWrapper>
      <CardTitle>
        <SkeletonBox $h="20px" />
        <br />
        <SkeletonBox $h="20px" />
      </CardTitle>
    </Card>
  );
};

export default SkeletonCard;
