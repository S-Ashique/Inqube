import { cn } from "@/lib/utils";

export const MenuIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        width="26"
        height="17"
        viewBox="0 0 26 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("fill-primary stroke-1 stroke-primary", className)}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.25 1.0625C0.25 0.475697 0.725697 0 1.3125 0H24.6875C25.2743 0 25.75 0.475697 25.75 1.0625C25.75 1.6493 25.2743 2.125 24.6875 2.125H1.3125C0.725697 2.125 0.25 1.6493 0.25 1.0625ZM0.25 8.5C0.25 7.9132 0.725697 7.4375 1.3125 7.4375H24.6875C25.2743 7.4375 25.75 7.9132 25.75 8.5C25.75 9.0868 25.2743 9.5625 24.6875 9.5625H1.3125C0.725697 9.5625 0.25 9.0868 0.25 8.5ZM11.9375 15.9375C11.9375 15.3507 12.4132 14.875 13 14.875H24.6875C25.2743 14.875 25.75 15.3507 25.75 15.9375C25.75 16.5243 25.2743 17 24.6875 17H13C12.4132 17 11.9375 16.5243 11.9375 15.9375Z"
        />
      </svg>
    </>
  );
};

export const XIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("stroke-3 stroke-primary", className)}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export const ArrowIcon = ({ className = "size-4" }: { className?: string }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary stroke-1 stroke-primary", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.375 3.625L16.75 3.625C16.9158 3.625 17.0747 3.69085 17.1919 3.80806C17.3092 3.92527 17.375 4.08424 17.375 4.25V13.625C17.375 13.9702 17.0952 14.25 16.75 14.25C16.4048 14.25 16.125 13.9702 16.125 13.625V5.75888L4.69194 17.1919C4.44786 17.436 4.05214 17.436 3.80806 17.1919C3.56398 16.9479 3.56398 16.5521 3.80806 16.3081L15.2411 4.875L7.375 4.875C7.02982 4.875 6.75 4.59518 6.75 4.25C6.75 3.90482 7.02982 3.625 7.375 3.625Z"
      />
    </svg>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("fill-primary", className)}
      >
        <path d="M23.333 35V29.1666C26.5608 29.1666 29.1663 26.5611 29.1663 23.3333H34.9997C34.9997 29.7889 29.7691 35 23.333 35Z" />
        <path d="M23.3332 35V29.1666C20.1054 29.1666 17.4998 26.5611 17.4998 23.3333H11.6665C11.6665 29.7889 16.8971 35 23.3332 35Z" />
        <path d="M0 23.3334H5.83333C5.83333 26.5612 8.43889 29.1667 11.6667 29.1667V35C5.23056 35 0 29.7889 0 23.3334Z" />
        <path d="M0 23.3334H5.83333C5.83333 20.1056 8.43889 17.5 11.6667 17.5V11.6667C5.23056 11.6667 0 16.8972 0 23.3334Z" />
        <path d="M11.6667 0V5.83333C8.43889 5.83333 5.83333 8.43889 5.83333 11.6667H0C0 5.23056 5.23056 0 11.6667 0Z" />
        <path d="M11.6665 0V5.83333C14.8943 5.83333 17.4998 8.43889 17.4998 11.6667H23.3332C23.3332 5.23056 18.1026 0 11.6665 0Z" />
        <path d="M35.0002 11.6667H29.1668C29.1668 8.43889 26.5613 5.83333 23.3335 5.83333V0C29.7696 0 35.0002 5.23056 35.0002 11.6667Z" />
        <path d="M35.0002 11.6667H29.1668C29.1668 14.8945 26.5613 17.5 23.3335 17.5V23.3334C29.7696 23.3334 35.0002 18.1222 35.0002 11.6667Z" />
      </svg>
    </>
  );
};
