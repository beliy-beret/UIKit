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
      d="M30.5297 22.6654L28.7053 21.6228C28.7946 21.4573 28.8159 21.2635 28.7648 21.0824C28.7137 20.9014 28.5942 20.7475 28.4316 20.6534C28.3877 20.6312 28.3419 20.6129 28.2948 20.5986C28.4335 20.1277 28.5401 19.648 28.6141 19.1627C28.906 17.2875 28.7265 15.369 28.0918 13.5809C27.4572 11.7929 26.3875 10.1919 24.9797 8.92311C23.5719 7.65432 21.8705 6.75783 20.0297 6.31491C18.189 5.87199 16.2671 5.89665 14.4382 6.38664C12.6094 6.87664 10.9314 7.81648 9.55649 9.12098C8.18153 10.4255 7.15303 12.0534 6.56423 13.8571C5.97543 15.6609 5.84494 17.5834 6.1846 19.4505C6.52425 21.3176 7.32331 23.0701 8.50933 24.5494C8.58511 24.6406 8.67892 24.7151 8.78484 24.7682C8.89076 24.8212 9.0065 24.8517 9.12476 24.8578C9.24302 24.8638 9.36124 24.8452 9.47198 24.8031C9.58271 24.761 9.68356 24.6964 9.76816 24.6134L10.3337 24.0829C10.5063 23.9095 10.6091 23.6785 10.6226 23.4339C10.636 23.1893 10.5592 22.9483 10.4067 22.7569C9.42272 21.4592 8.81768 19.9131 8.65904 18.2908C8.5004 16.6686 8.79441 15.034 9.50828 13.5695C10.2221 12.105 11.3278 10.8681 12.7019 9.99685C14.076 9.12556 15.6645 8.65413 17.2902 8.63514C18.916 8.61615 20.515 9.05035 21.909 9.8893C23.303 10.7283 24.4371 11.939 25.1848 13.3864C25.9325 14.8338 26.2644 16.4611 26.1435 18.0866C26.0226 19.7121 25.4536 21.272 24.5001 22.5922C24.3511 22.7869 24.2789 23.0298 24.2975 23.2745C24.316 23.5192 24.4238 23.7484 24.6004 23.9183L25.1751 24.4305C25.2756 24.5173 25.3938 24.5811 25.5214 24.6174C25.649 24.6537 25.783 24.6617 25.914 24.6408C25.9589 24.6964 26.011 24.7456 26.0691 24.7871C26.2328 24.881 26.4268 24.9068 26.6092 24.8589C26.7917 24.811 26.9482 24.6933 27.0451 24.5311L28.8695 25.5736C28.9736 25.6341 29.0886 25.6733 29.2079 25.689C29.3272 25.7048 29.4484 25.6967 29.5646 25.6652C29.6808 25.6338 29.7896 25.5796 29.8847 25.5058C29.9799 25.432 30.0596 25.3401 30.1192 25.2353L30.8854 23.9092C30.9436 23.8041 30.9805 23.6886 30.9941 23.5692C31.0077 23.4498 30.9977 23.3289 30.9647 23.2134C30.9316 23.0979 30.8762 22.99 30.8016 22.896C30.7269 22.802 30.6345 22.7236 30.5297 22.6654ZM20.5535 20.2449C22.3525 18.4413 22.3525 15.5171 20.5535 13.7135C18.7546 11.9099 15.8378 11.9099 14.0389 13.7135C12.2399 15.5171 12.2399 18.4413 14.0389 20.2449C15.8378 22.0485 18.7546 22.0485 20.5535 20.2449ZM12.1426 24.8266C13.5111 23.4545 15.3673 22.6837 17.3027 22.6837C19.2382 22.6837 21.0943 23.4545 22.4629 24.8266C23.8314 26.1987 24.6003 28.0596 24.6003 30H10.0052C10.0052 28.0596 10.774 26.1987 12.1426 24.8266ZM18.0649 24.1034C18.1214 24.0798 18.1725 24.0448 18.2149 24.0006H18.2514C18.3145 23.9362 18.357 23.8544 18.3738 23.7657C18.3906 23.677 18.3808 23.5854 18.3457 23.5022C18.3106 23.4191 18.2517 23.3482 18.1765 23.2986C18.1013 23.249 18.0131 23.2228 17.923 23.2233H16.4818C16.3917 23.2228 16.3035 23.249 16.2283 23.2986C16.1531 23.3482 16.0942 23.4191 16.0591 23.5022C16.024 23.5854 16.0142 23.677 16.031 23.7657C16.0477 23.8544 16.0903 23.9362 16.1534 24.0006C16.1958 24.0448 16.2469 24.0798 16.3034 24.1034C16.3599 24.127 16.4206 24.1387 16.4818 24.1378H17.0108L16.3997 27.5308C16.3884 27.5535 16.3826 27.5785 16.3826 27.6039C16.3826 27.6293 16.3884 27.6543 16.3997 27.6771L17.1203 28.5459C17.1374 28.5654 17.1585 28.5809 17.1821 28.5916C17.2057 28.6023 17.2312 28.6078 17.2571 28.6078C17.283 28.6078 17.3086 28.6023 17.3322 28.5916C17.3558 28.5809 17.3768 28.5654 17.394 28.5459L18.1146 27.6771C18.1258 27.6543 18.1317 27.6293 18.1317 27.6039C18.1317 27.5785 18.1258 27.5535 18.1146 27.5308L17.3575 24.1378H17.8865C17.9477 24.1387 18.0084 24.127 18.0649 24.1034Z"
      fill="white"
    />
  </svg>
);
export { SvgComponent as InvestPersonal };