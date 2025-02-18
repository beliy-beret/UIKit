import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="tooltip-triangle"
    width={12}
    height={6}
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 6L0 0H12L6 6Z" fill="#0B1429" />
  </svg>
);
export { SvgComponent as Triangle };
