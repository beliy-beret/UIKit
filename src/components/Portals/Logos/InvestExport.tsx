import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={4} fill="#1B4DCB" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.9861 21.2374V14.7626C29.0556 13.818 28.8638 12.8726 28.4322 12.0324C27.8974 11.2356 27.1618 10.5984 26.3017 10.1871L20.6348 6.94964C19.8567 6.40161 18.9485 6.07379 18.0037 6C17.0523 6.04887 16.1319 6.35844 15.3406 6.89568L9.66302 10.1331C8.80428 10.5415 8.06879 11.1748 7.53259 11.9676C7.11196 12.834 6.93505 13.801 7.02128 14.7626V21.2374C6.95793 22.1944 7.157 23.1505 7.5965 24C8.31019 24.9928 10.7922 25.5647 15.2448 24.1942C13.7748 24.1942 11.0904 24.5611 9.91867 23.7194L18.0037 19.0791L18.7813 19.5647C19.206 19.5162 19.6348 19.5162 20.0595 19.5647L22.6161 19.6942L26.1952 19.8561C26.5975 19.8744 26.997 19.9322 27.3882 20.0288C27.6832 20.1088 27.9531 20.264 28.1721 20.4795C28.3911 20.6951 28.5521 20.9638 28.6397 21.2602C28.7272 21.5566 28.7384 21.8707 28.6723 22.1727C28.6061 22.4747 28.4648 22.7546 28.2617 22.9856L26.1313 25.9209L24.9276 26.6331L27.7611 22.6619C28.5387 21.4856 27.8889 20.5036 26.5041 20.5036L19.985 20.1583C17.9078 19.9209 16.5017 20.8489 17.4391 22.5971L17.7161 23.1259L18.4298 22.759C17.8119 21.7338 18.1848 21.1942 19.495 21.2698H25.5987C26.7172 21.3237 27.1326 21.7446 26.8024 22.4676V22.554C26.7385 22.6511 26.6746 22.759 26.5893 22.8777L23.2552 27.4964C23.1445 27.6889 22.9902 27.852 22.805 27.9721C22.6197 28.0922 22.4089 28.1659 22.19 28.187C22.1368 28.1921 22.0833 28.1921 22.0302 28.187H21.913L21.7532 28.1007L21.6574 28.036C21.5858 27.9836 21.5213 27.922 21.4656 27.8525L21.4337 27.7122L21.1993 27.3777L20.8585 26.8165C19.2776 27.4512 17.6038 27.8158 15.9052 27.8957H14.3606C14.105 27.8957 13.8387 27.8957 13.583 27.8309H13.2422C12.4754 27.7289 11.7171 27.5702 10.9732 27.3561C12.0431 27.9561 13.207 28.3649 14.4139 28.5647L15.3513 29.1043C16.1378 29.635 17.0496 29.9442 17.993 30C18.9447 29.9527 19.8655 29.643 20.6561 29.1043L21.7213 28.4892C22.3391 29.4281 23.17 29.1583 23.8517 28.0899L24.9169 26.6547L26.323 25.8453C27.0224 25.4913 27.6453 24.9997 28.1552 24.3993V24.3453C28.2393 24.2382 28.3175 24.1266 28.3896 24.0108C28.8357 23.1593 29.0421 22.1998 28.9861 21.2374ZM8.95998 22.0791C8.95998 21.8417 8.95998 21.5611 8.95998 21.2482V14.7626C8.9059 14.1459 9.00858 13.5255 9.25824 12.9604C9.62555 12.4691 10.1091 12.0794 10.6643 11.8273L16.3313 8.58993L16.7893 8.34173L17.0663 17.5144L8.95998 22.0791Z"
      fill="white"
    />
  </svg>
);

export { SvgComponent as InvestExport };