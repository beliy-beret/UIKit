import { UserProps } from "../types.ts";
import * as S from "./style.ts";
import { useMemo } from "react";
import { Avatar } from "../../Avatar";

export const User = ({ name: userName, role, imgSrc = "" }: UserProps) => {
  const initials = useMemo(() => {
    const [lastName, name] = userName.split(" ");
    return `${lastName[0]}${name[0]}`;
  }, [userName]);

  const nameWithInitials = useMemo(() => {
    const [lastName, name, fatherName] = userName.split(" ");
    return `${lastName} ${name[0]}.${fatherName?.[0] || ""}.`;
  }, [userName]);

  return (
    <S.User aria-label="user-info">
      <Avatar variant="Medium" imgSrc={imgSrc} userInitials={initials} />
      <div>
        <p className="user-name">{nameWithInitials}</p>
        {role && <p className="user-role">{role}</p>}
      </div>
    </S.User>
  );
};
