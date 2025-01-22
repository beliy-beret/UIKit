import { ReactNode, useState } from "react";
import { Button } from "../Button";
import { ButtonIcon } from "./icon/ButtonIcon.tsx";
import { PortalList } from "./PortalList.tsx";
import * as S from "./style.ts";

type Props = {
  children: ReactNode;
};

export const PortalBox = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.PortalsBox>
      {open && (
        <PortalList onClose={() => setOpen(false)}>{children}</PortalList>
      )}

      <Button variant="Text" onClick={() => setOpen(true)}>
        <ButtonIcon />
      </Button>
    </S.PortalsBox>
  );
};
