import { ReactNode, useEffect, useRef } from "react";
import * as S from "./style";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const PortalList = ({ children, onClose }: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.PortalList ref={boxRef} onClick={onClose}>
      {children}
    </S.PortalList>
  );
};
