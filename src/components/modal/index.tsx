import { FC, PropsWithChildren } from "react";
import ReactModal from "react-modal";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  onClose,
}) => (
  <ReactModal
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    onRequestClose={onClose}
    ariaHideApp={false}
    style={{
      content: {
        borderRadius: "15px",
        padding: "40px",
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        border: "none",
        boxShadow: "0 5px 20px 0 rgba(213, 213, 213, 0.47)",
      },
      overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    }}
  >
    {children}
  </ReactModal>
);

export default Modal;
