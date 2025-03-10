import { Button } from "../Button";
import * as S from "./style";
import { NavItemProps, SideBarProps } from "./types.ts";
import { User } from "./User";

export const SideBar = ({
  children,
  title,
  logout,
  ...userProps
}: SideBarProps) => {
  return (
    <S.Sidebar>
      <h2 className="sidebar-title">{title}</h2>
      <User {...userProps} />

      {children}

      <div className="logout-button">
        <Button variant="Secondary" design="Body" onClick={logout}>
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.3335 3.16668C3.15668 3.16668 2.98712 3.23691 2.86209 3.36194C2.73707 3.48696 2.66683 3.65653 2.66683 3.83334V13.1667C2.66683 13.3435 2.73707 13.5131 2.86209 13.6381C2.98712 13.7631 3.15669 13.8333 3.3335 13.8333H6.00016C6.36835 13.8333 6.66683 14.1318 6.66683 14.5C6.66683 14.8682 6.36835 15.1667 6.00016 15.1667H3.3335C2.80306 15.1667 2.29435 14.956 1.91928 14.5809C1.54421 14.2058 1.3335 13.6971 1.3335 13.1667V3.83334C1.3335 3.30291 1.54421 2.7942 1.91928 2.41913C2.29436 2.04406 2.80306 1.83334 3.3335 1.83334H6.00016C6.36835 1.83334 6.66683 2.13182 6.66683 2.50001C6.66683 2.8682 6.36835 3.16668 6.00016 3.16668H3.3335Z"
              fill="#8E8CA3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1953 4.69526C10.4556 4.43491 10.8777 4.43491 11.1381 4.69526L14.4714 8.0286C14.7318 8.28894 14.7318 8.71106 14.4714 8.9714L11.1381 12.3047C10.8777 12.5651 10.4556 12.5651 10.1953 12.3047C9.93491 12.0444 9.93491 11.6223 10.1953 11.3619L13.0572 8.5L10.1953 5.63807C9.93491 5.37772 9.93491 4.95561 10.1953 4.69526Z"
              fill="#8E8CA3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.3335 8.50001C5.3335 8.13182 5.63197 7.83334 6.00016 7.83334H14.0002C14.3684 7.83334 14.6668 8.13182 14.6668 8.50001C14.6668 8.8682 14.3684 9.16668 14.0002 9.16668H6.00016C5.63197 9.16668 5.3335 8.8682 5.3335 8.50001Z"
              fill="#8E8CA3"
            />
          </svg>
          <span>Выйти</span>
        </Button>
      </div>
    </S.Sidebar>
  );
};

SideBar.LinkItem = ({ children }: NavItemProps) => {
  return <span className={"link-wrapper"} children={children} />;
};
