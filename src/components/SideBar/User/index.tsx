import { UserProps } from "../types.ts";
import * as S from "./style.ts";
import { useMemo } from "react";
import { Avatar } from "../../Avatar";

export const User = ({ userName, userRole, userImgSrc = "" }: UserProps) => {
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
      <Avatar variant="Medium" imgSrc={userImgSrc} userInitials={initials} />
      <div className="user-data">
        <p className="user-name">{nameWithInitials}</p>
        {userRole && <p className="user-role">{userRole}</p>}
      </div>
    </S.User>
  );
};
