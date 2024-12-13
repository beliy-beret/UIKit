import { type ReactNode, CSSProperties, MouseEvent, useEffect } from "react";
import * as S from "./style";

type Props = {
  children: ReactNode;
  onClose?: () => void;
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
};

export const Modal = ({ children, onClose, style, wrapperStyle }: Props) => {
  const modalRoot = document.getElementById("uikit-modal");

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) {
    throw new Error("Modal root element not found");
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalRoot]);

  return (
    <S.Modal id="uikit-modal" style={style} onClick={handleBackdropClick}>
      <div style={wrapperStyle}>{children}</div>
    </S.Modal>
  );
};
