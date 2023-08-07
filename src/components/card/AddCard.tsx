import { FC, useCallback, useRef } from "react";
import styled from "styled-components";
import PlusIcon from "../icons/PlusIcon";
import { useRouter } from "next/router";

const Card = styled.div`
  min-width: 340px;
  max-width: 340px;
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
  background-color: #fff;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCard: FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const cardStyleHandler = useCallback((size: number, color: string) => {
    const eventHandler = () => {
      const target = cardRef.current;
      if (target) {
        target.style.transform = `scale(${size})`;
        target.style.transition = `transform 0.2s`;
        target.style.backgroundColor = color;
      } else {
        console.log("no target error");
      }
    };
    return eventHandler;
  }, []);

  const onCardClick = useCallback(() => {
    router.push("admin/add");
  }, [router]);

  return (
    <Card
      ref={cardRef}
      onMouseEnter={cardStyleHandler(1.05, "#F0F8FF")}
      onMouseLeave={cardStyleHandler(1, "#ffffff")}
      onMouseDown={cardStyleHandler(0.95, "#87CEEB")}
      onMouseUp={cardStyleHandler(1.05, "#F0F8FF")}
      onClick={onCardClick}
    >
      <PlusIcon w={240} />
    </Card>
  );
};

export default AddCard;
