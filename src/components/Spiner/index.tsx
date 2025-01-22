import * as S from "./style";

type Props = {
  size?: "small" | "medium" | "large";
};

const sizes = {
  small: 24,
  medium: 32,
  large: 48,
};

export const Spinner = ({ size = "small" }: Props) => (
  <S.Spinner
    width={sizes[size]}
    height={sizes[size]}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <clipPath id="clip">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0013 22.3923C23.7408 19.0786 25.7073 11.7395 22.3936 6.00003C19.0799 0.26052 11.7408 -1.70598 6.00131 1.60773C0.261802 4.92144 -1.7047 12.2605 1.60901 18C4.92272 23.7395 12.2618 25.706 18.0013 22.3923ZM17.0013 20.6603C21.7842 17.8989 23.423 11.783 20.6616 7.00003C17.9001 2.21711 11.7842 0.578354 7.00131 3.33978C2.21839 6.1012 0.579636 12.2171 3.34106 17C6.10248 21.783 12.2184 23.4217 17.0013 20.6603Z"
        fill="url(#paint0_angular_1351_36135)"
      />
    </clipPath>
    <foreignObject
      id="paint0_angular_263_94"
      x={0}
      y={0}
      width={40}
      height={40}
      clipPath="url(#clip)"
    >
      <div
        style={{
          backgroundImage: "conic-gradient(from 45deg, white, #1B4DCB)",
          width: 24,
          height: 24,
        }}
      />
    </foreignObject>
  </S.Spinner>
);
