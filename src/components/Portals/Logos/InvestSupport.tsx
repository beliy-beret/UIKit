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
      d="M20.8316 6.37048C18.2933 5.702 15.5929 5.94359 13.2223 7.05122C10.8517 8.15886 8.96876 10.0588 7.9165 12.4049C6.86425 14.751 6.71274 17.3871 7.4896 19.8328C8.26646 22.2786 9.91996 24.3712 12.1488 25.7294L13.1644 21.8932C13.1644 21.8932 13.7432 20.7759 12.1488 19.1644C10.5545 17.5528 9.52878 14.6064 12.1488 12.629C14.7689 10.6516 16.4851 9.50468 17.0944 9.53434C17.7037 9.564 16.0789 12.0852 15.5508 13.3903C15.0837 14.5273 14.3627 16.5542 16.3125 17.5033C18.8614 18.7491 19.7551 17.8889 20.6081 16.5146C21.4612 15.1403 22.5884 12.5598 23.0657 12.5598C23.543 12.5598 24.0812 16.218 23.6243 17.9285C23.4842 18.5922 23.2055 19.2208 22.8054 19.7753C22.4054 20.3298 21.8925 20.7983 21.2987 21.1517C20.334 21.6954 19.2677 21.4878 18.7599 21.9426C18.4028 22.2752 18.1254 22.6803 17.9475 23.1291L17.3077 25.4525L15.9367 30.6235C15.9196 30.6833 15.9221 30.7468 15.944 30.8051C15.9658 30.8635 16.006 30.9136 16.0587 30.9486C16.1114 30.9835 16.174 31.0015 16.2378 30.9999C16.3015 30.9983 16.3632 30.9773 16.414 30.9399L23.9898 25.6404C26.2755 24.213 27.9308 22.0055 28.6308 19.4511C29.0018 18.0936 29.0944 16.6782 28.9031 15.2859C28.7119 13.8936 28.2406 12.5516 27.5163 11.3367C26.7919 10.1218 25.8287 9.05792 24.6817 8.20577C23.5346 7.35362 22.2263 6.72997 20.8316 6.37048Z"
      fill="white"
    />
  </svg>
);
export { SvgComponent as InvestSupport };