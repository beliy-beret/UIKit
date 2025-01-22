import { CSSProperties, MouseEvent, useEffect, ComponentProps } from "react";
import * as S from "./style";

type Props = Pick<ComponentProps<"div">, "style" | "children"> & {
  transparent?: boolean;
  onClose?: () => void;
  wrapperStyle?: CSSProperties;
};

export const Modal = ({
  children,
  onClose,
  style,
  wrapperStyle,
  transparent = false,
}: Props) => {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <S.Modal
      $transparent={transparent}
      id="uikit-modal"
      style={style}
      onClick={handleBackdropClick}
    >
      <div style={wrapperStyle}>{children}</div>
    </S.Modal>
  );
};
