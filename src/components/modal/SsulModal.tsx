import { FC, MouseEventHandler, useCallback, useRef } from "react";
import Modal, { ModalProps } from ".";
import styled from "styled-components";
import CloseIcon from "../icons/modal/CloseIcon";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  @keyframes upScale {
    from {
      width: 20vw;
      height: 20vh;
    }
    to {
      width: 80vw;
      height: 80vh;
    }
  }
  @keyframes downScale {
    from {
      width: 80vw;
      height: 80vh;
    }
    to {
      width: 20vw;
      height: 20vh;
    }
  }
  width: 80vw;
  height: 80vh;
  animation-name: upScale;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

interface SsulModalProps extends ModalProps {
  title: string;
  link: string;
}

const SsulModal: FC<SsulModalProps> = ({ isOpen, onClose, title, link }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  const iconScaler = useCallback((size: number) => {
    const eventHandler: MouseEventHandler<HTMLDivElement> = (e) => {
      const style = e.currentTarget.style;
      style.transform = `scale(${size})`;
      style.transition = "transform 0.2s";
    };
    return eventHandler;
  }, []);

  const onDelayClose = useCallback(() => {
    if (layoutRef.current) {
      layoutRef.current.style.animationName = "downScale";
    }
    setTimeout(() => onClose(), 400);
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onDelayClose}>
      <Layout ref={layoutRef}>
        <Header>
          {title}
          <IconWrapper
            onMouseEnter={iconScaler(1.2)}
            onMouseDown={iconScaler(0.8)}
            onMouseLeave={iconScaler(1)}
            onMouseUp={iconScaler(1.2)}
            onClick={onDelayClose}
          >
            <CloseIcon />
          </IconWrapper>
        </Header>
        <iframe src={link} width="100%" height="100%" />
      </Layout>
    </Modal>
  );
};
export default SsulModal;
