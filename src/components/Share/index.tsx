import Telegram from "./images/share-tg.svg";
import VK from "./images/share-vk.svg";
import Link from "./images/share.svg";
import * as S from "./styled";
import { Button } from "../Button";
import { ButtonVariant } from "../Button/types.ts";
import { HTMLAttributes, ReactNode } from "react";

type Props = Pick<
  HTMLAttributes<"div">,
  "aria-label" | "aria-current" | "aria-selected"
> & {
  shareUrl: string;
  className?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
};

export const Share = ({
  shareUrl,
  icon,
  className = "",
  variant = "Text",
  ...ariaAttr
}: Props) => {
  const link = shareUrl.startsWith("http")
    ? shareUrl
    : `${window.location.origin}${shareUrl}`;

  const copyLink = async (value: string) => {
    if (navigator && navigator.clipboard?.writeText) {
      await navigator.clipboard?.writeText(value);
    }
  };

  const shareLink = (value: string) => {
    window.open(value, "_blank", "noopener, noreferer");
  };

  return (
    <S.Share className={className} {...ariaAttr}>
      <S.Popup aria-label="share-tooltip">
        <button
          className="link"
          onClick={() => shareLink(`https://t.me/share/url?url=${link}`)}
        >
          <img src={Telegram} alt="" />
          Telegram
        </button>
        <button
          className="link"
          onClick={() => shareLink(`https://vk.com/share.php?url=${link}`)}
        >
          <img src={VK} alt="" />
          VK
        </button>
        <button className="link" onClick={() => copyLink(link)}>
          <img src={Link} alt="" />
          Скопировать ссылку
        </button>
      </S.Popup>

      <Button variant={variant} className="share-button">
        {icon ? (
          icon
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_611_7746)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5169 1.83378C9.27131 1.10515 10.2817 0.701975 11.3305 0.711089C12.3793 0.720202 13.3825 1.14088 14.1242 1.88251C14.8658 2.62414 15.2865 3.62739 15.2956 4.67618C15.3047 5.72497 14.9015 6.73538 14.1729 7.48979L14.1648 7.49805L12.1649 9.49796C11.7594 9.90362 11.2713 10.2173 10.7339 10.4178C10.1965 10.6183 9.6223 10.7008 9.05018 10.6598C8.47807 10.6189 7.92146 10.4553 7.4181 10.1803C6.91475 9.90531 6.47643 9.52527 6.13286 9.06596C5.91233 8.77113 5.97255 8.35334 6.26739 8.1328C6.56222 7.91226 6.98001 7.97249 7.20055 8.26732C7.42959 8.57353 7.72181 8.82689 8.05738 9.01023C8.39295 9.19356 8.76402 9.30259 9.14543 9.3299C9.52684 9.35722 9.90966 9.30219 10.2679 9.16854C10.6262 9.0349 10.9515 8.82576 11.2219 8.55532L11.222 8.55524L13.2176 6.55956C13.701 6.05705 13.9684 5.38513 13.9623 4.68777C13.9562 3.98857 13.6758 3.31974 13.1814 2.82532C12.6869 2.3309 12.0181 2.05045 11.3189 2.04437C10.6212 2.03831 9.94905 2.30591 9.44647 2.78967L8.3034 3.92609C8.04229 4.18568 7.62019 4.18445 7.3606 3.92334C7.10101 3.66223 7.10224 3.24012 7.36335 2.98053L8.51001 1.84053L8.5169 1.83378Z"
                fill="#8E8CA3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.26591 5.58222C5.80331 5.38175 6.37755 5.2992 6.94966 5.34018C7.52178 5.38115 8.07839 5.54468 8.58174 5.81969C9.0851 6.0947 9.52342 6.47474 9.86698 6.93404C10.0875 7.22888 10.0273 7.64667 9.73246 7.8672C9.43763 8.08774 9.01984 8.02751 8.7993 7.73268C8.57026 7.42648 8.27804 7.17312 7.94247 6.98978C7.6069 6.80644 7.23583 6.69742 6.85442 6.6701C6.47301 6.64279 6.09019 6.69782 5.73191 6.83146C5.37364 6.96511 5.0483 7.17424 4.77796 7.44468L2.7822 9.44044C2.29884 9.94296 2.03148 10.6149 2.03754 11.3122C2.04361 12.0114 2.32406 12.6803 2.81848 13.1747C3.31291 13.6691 3.98174 13.9496 4.68093 13.9556C5.37829 13.9617 6.0502 13.6943 6.55272 13.211L7.6884 12.0753C7.94875 11.8149 8.37086 11.8149 8.63121 12.0753C8.89156 12.3356 8.89156 12.7577 8.63121 13.0181L7.49121 14.1581L7.48295 14.1662C6.72854 14.8949 5.71813 15.298 4.66934 15.2889C3.62056 15.2798 2.61731 14.8591 1.87567 14.1175C1.13404 13.3759 0.713366 12.3726 0.704253 11.3238C0.695139 10.275 1.09832 9.26463 1.82695 8.51022L1.83507 8.50196L3.83498 6.50204C3.83496 6.50207 3.83501 6.50201 3.83498 6.50204C4.24048 6.09643 4.72854 5.78267 5.26591 5.58222Z"
                fill="#8E8CA3"
              />
            </g>
            <defs>
              <clipPath id="clip0_611_7746">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </Button>
    </S.Share>
  );
};
