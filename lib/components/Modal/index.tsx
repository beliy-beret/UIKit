import { type ReactNode, CSSProperties, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./style";

type Props = {
  children?: ReactNode;
  onClose: () => void;
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
};

export const Modal = ({ children, onClose, style, wrapperStyle }: Props) => {
  const modalRoot = document.getElementById("modal");

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) {
    throw new Error("Modal root element not found");
  }

  useEffect(() => {
    if (!document.body.classList.contains("scroll-hidden")) {
      document.body.classList.add("scroll-hidden");
    }
    return () => {
      if (modalRoot && modalRoot.children.length < 1) {
        document.body.classList.remove("scroll-hidden");
      }
    };
  }, [modalRoot]);

  return createPortal(
    <S.Modal style={style} onClick={handleBackdropClick}>
      <div style={wrapperStyle}>{children}</div>
    </S.Modal>,
    modalRoot,
  );
};
