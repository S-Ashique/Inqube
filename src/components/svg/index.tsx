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
export const ReadershipIcon = ({
  className = "size-12",
}: {
  className?: string;
}) => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <path
          d="M3 3H15C21.6274 3 27 8.37258 27 15H15C8.37258 15 3 9.62742 3 3Z"
          className="fill-text-muted"
        />
        <path
          d="M3 15H15C21.6274 15 27 20.3726 27 27H15C8.37258 27 3 21.6274 3 15Z"
          className="fill-primary"
        />
      </svg>
    </>
  );
};
export const ContributionIcon = ({
  className = "size-12",
}: {
  className?: string;
}) => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <path
          d="M15 21C15 24.3137 17.6863 27 21 27C24.3137 27 27 24.3137 27 21C27 17.6863 24.3137 15 21 15H15V21Z"
          className="fill-primary"
        />
        <path
          d="M15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15H15V9Z"
          className="fill-primary"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 3C17.6863 3 15 5.68629 15 9V15H21C24.3137 15 27 12.3137 27 9C27 5.68629 24.3137 3 21 3ZM24 9C24 10.6569 22.6569 12 21 12C19.3431 12 18 10.6569 18 9C18 7.34315 19.3431 6 21 6C22.6569 6 24 7.34315 24 9Z"
          className="fill-text-muted"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 27C12.3137 27 15 24.3137 15 21V15H9C5.68629 15 3 17.6863 3 21C3 24.3137 5.68629 27 9 27ZM12 21C12 22.6569 10.6569 24 9 24C7.34315 24 6 22.6569 6 21C6 19.3431 7.34315 18 9 18C10.6569 18 12 19.3431 12 21Z"
          className="fill-text-muted"
        />
      </svg>
    </>
  );
};
export const NewsIcon = ({ className = "size-12" }: { className?: string }) => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <path
          d="M17.3562 20.65H12.6729V30H17.3562V20.65Z"
          className="fill-text-muted"
        />
        <path
          d="M17.3562 0H12.6729V9.35H17.3562V0Z"
          className="fill-text-muted"
        />
        <path
          d="M20.646 12.6567V17.3401H29.996V12.6567H20.646Z"
          className="fill-text-muted"
        />
        <path
          d="M0 12.661L0 17.3443H9.35V12.661H0Z"
          className="fill-text-muted"
        />
        <path
          d="M20.6544 17.3261L17.3428 20.6377L23.9542 27.2491L27.2657 23.9375L20.6544 17.3261Z"
          className="fill-primary"
        />
        <path
          d="M6.05475 2.72734L2.74316 6.03893L9.35455 12.6503L12.6661 9.33873L6.05475 2.72734Z"
          className="fill-primary"
        />
        <path
          d="M17.332 9.35308L20.6436 12.6647L27.2549 6.05328L23.9434 2.74169L17.332 9.35308Z"
          className="fill-primary"
        />
        <path
          d="M2.73432 23.9518L6.0459 27.2634L12.6573 20.652L9.3457 17.3405L2.73432 23.9518Z"
          className="fill-primary"
        />
      </svg>
    </>
  );
};

export const FuturesIcon = ({
  className = "size-12",
}: {
  className?: string;
}) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <path
          d="M28.75 28.75C35.4207 27.1442 40 23.8291 40 20C40 16.1709 35.4207 12.8558 28.75 11.25C29.4363 13.8829 29.8225 16.8547 29.8225 20C29.8225 23.1453 29.4363 26.1171 28.75 28.75Z"
          className="fill-text-muted"
        />
        <path
          d="M11.25 28.75C4.57932 27.1442 0 23.8291 0 20C0 16.1709 4.57932 12.8558 11.25 11.25C10.5637 13.8829 10.1775 16.8547 10.1775 20C10.1775 23.1453 10.5637 26.1171 11.25 28.75Z"
          className="fill-text-muted"
        />
        <path
          d="M11.25 28.75C12.8558 35.4207 16.1709 40 20 40C23.8291 40 27.1442 35.4207 28.75 28.75C26.1171 29.4363 23.1453 29.8225 20 29.8225C16.8547 29.8225 13.8829 29.4363 11.25 28.75Z"
          className="fill-primary"
        />
        <path
          d="M11.25 11.25C12.8558 4.57932 16.1709 -1.74166e-07 20 0C23.8291 1.74166e-07 27.1442 4.57932 28.75 11.25C26.1171 10.5637 23.1453 10.1775 20 10.1775C16.8547 10.1775 13.8829 10.5637 11.25 11.25Z"
          className="fill-primary"
        />
      </svg>
    </>
  );
};

export const ResearchIcon = ({
  className = "size-12",
}: {
  className?: string;
}) => {
  return (
    <>
      <svg
        width="58"
        height="50"
        viewBox="0 0 58 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <path
          d="M13.4126 34.5424L13.4126 50H44.3598V34.5424H13.4126Z"
          className="fill-primary"
        />
        <path
          d="M44.3535 34.5291L57.7397 26.8003L42.2661 -9.68632e-07L28.8799 7.72878L44.3535 34.5291Z"
          className="fill-text-muted"
        />
        <path
          d="M28.8599 7.74978L15.4736 0.0209961L2.19345e-05 26.8213L13.3863 34.5501L28.8599 7.74978Z"
          className="fill-text-muted"
        />
      </svg>
    </>
  );
};