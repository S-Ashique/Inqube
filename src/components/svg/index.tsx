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

export const ArrowIcon = ({ className }: { className?: string }) => {
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

export const DownloadIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 stroke-[1.5] stroke-primary", className)}
    >
      <path
        d="M9.31995 11.6799L11.8799 14.2399L14.4399 11.6799"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.88 4V14.17"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12.1799C20 16.5999 17 20.1799 12 20.1799C7 20.1799 4 16.5999 4 12.1799"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 stroke-[1.5] stroke-primary", className)}
    >
      <path
        d="M18.0023 6.52301C18.2153 6.79098 18.3332 7.13912 18.3332 7.50009C18.3332 7.86107 18.2153 8.20921 18.0023 8.47718C16.6536 10.1251 13.5836 13.3334 9.99984 13.3334C6.4161 13.3334 3.34616 10.1251 1.99744 8.47718C1.78442 8.20921 1.6665 7.86107 1.6665 7.50009C1.6665 7.13912 1.78442 6.79098 1.99744 6.52301C3.34616 4.87509 6.4161 1.66675 9.99984 1.66675C13.5836 1.66675 16.6536 4.87509 18.0023 6.52301Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 10.0925C11.4191 10.0925 12.5693 8.93181 12.5693 7.49997C12.5693 6.06814 11.4191 4.90741 10.0003 4.90741C8.58145 4.90741 7.43127 6.06814 7.43127 7.49997C7.43127 8.93181 8.58145 10.0925 10.0003 10.0925Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};

export const StarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 fill-primary", className)}
    >
      <path d="M7.94128 1.9429C8.71397 0.62493 10.6193 0.624932 11.392 1.9429L13.1178 4.88664C13.3998 5.36761 13.8697 5.70904 14.4143 5.8286L17.7473 6.5603C19.2395 6.8879 19.8283 8.69996 18.8136 9.8421L16.5472 12.3931C16.177 12.8099 15.9975 13.3624 16.052 13.9173L16.3861 17.3132C16.5357 18.8337 14.9942 19.9536 13.5944 19.3415L10.4679 17.9744C9.95707 17.751 9.37618 17.751 8.86535 17.9744L5.73883 19.3415C4.33903 19.9536 2.7976 18.8337 2.94716 17.3132L3.28122 13.9173C3.3358 13.3624 3.15629 12.8099 2.786 12.3931L0.519648 9.8421C-0.495038 8.69995 0.0937374 6.8879 1.58597 6.5603L4.91895 5.8286C5.46352 5.70904 5.93346 5.36761 6.21544 4.88664L7.94128 1.9429Z" />
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

export const LikeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-text-muted size-4", className)}
    >
      <path
        d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CommentIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-text-muted size-4", className)}
    >
      <path
        d="M5.07167 13.4906C5.95564 13.9235 6.94952 14.1666 8.00016 14.1666C11.6821 14.1666 14.6668 11.1819 14.6668 7.49992C14.6668 3.81802 11.6821 0.833252 8.00016 0.833252C4.31827 0.833252 1.3335 3.81802 1.3335 7.49992C1.3335 8.8667 1.7448 10.1374 2.45038 11.195M5.07167 13.4906L1.3335 14.1666L2.45038 11.195M5.07167 13.4906L5.07709 13.4897M2.45038 11.195L2.45144 11.1922"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShareIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-text-muted size-4", className)}
    >
      <path
        d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.11 13.6501L13.69 10.0601"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EbooksIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="46"
      height="49"
      viewBox="0 0 46 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-12", className)}
    >
      <path
        d="M21.5 29C21.5 20.3674 46.6449 5.00101 45.4594 10.7595C42.9819 22.7935 42.9819 35.2065 45.4594 47.2405C46.6449 52.999 21.5 37.6326 21.5 29Z"
        className="fill-text-muted"
      />
      <path
        d="M24.5 20C24.5 28.6326 -0.644857 43.999 0.540638 38.2405C3.01806 26.2065 3.01806 13.7935 0.540638 1.75952C-0.644857 -3.99898 24.5 11.3674 24.5 20Z"
        className="fill-primary"
      />
    </svg>
  );
};

export const WhitepaperIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="46"
      height="49"
      viewBox="0 0 46 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-12", className)}
    >
      <path d="M21 0V48L0 36V12L21 0Z" className="fill-text-muted" />
      <path d="M42 0V48L21 36V12L42 0Z" className="fill-primary" />
    </svg>
  );
};

export const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-heading", className)}
    >
      <path d="M17.5475 3.98396C17.5552 4.15996 17.5552 4.32796 17.5552 4.50396C17.563 9.83998 13.6426 16 6.47319 16C4.35865 16 2.2827 15.368 0.5 14.184C0.808692 14.224 1.11738 14.24 1.42608 14.24C3.1779 14.24 4.88343 13.632 6.26483 12.504C4.59789 12.472 3.1316 11.344 2.62226 9.69598C3.20877 9.81598 3.81072 9.79198 4.3818 9.62398C2.56824 9.25598 1.26401 7.59997 1.2563 5.67197C1.2563 5.65597 1.2563 5.63997 1.2563 5.62397C1.79651 5.93597 2.40617 6.11197 3.02356 6.12797C1.31803 4.94396 0.78554 2.58396 1.81966 0.735951C3.80301 3.26396 6.72015 4.79196 9.85337 4.95996C9.53696 3.55996 9.96913 2.08796 10.9801 1.09595C12.5467 -0.432053 15.0162 -0.352052 16.498 1.27195C17.37 1.09595 18.2112 0.759951 18.9752 0.28795C18.682 1.22395 18.0723 2.01596 17.262 2.51996C18.0337 2.42396 18.79 2.20796 19.5 1.88795C18.9752 2.70396 18.3115 3.40796 17.5475 3.98396Z" />
    </svg>
  );
};


export const LinkdInIcon = ({ className }: { className?: string }) => {
return (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("fill-heading", className)}
  >
    <path d="M16.3873 0.333008H1.61303C1.27368 0.333008 0.948224 0.467816 0.708264 0.707776C0.468304 0.947735 0.333496 1.27319 0.333496 1.61255V16.3868C0.333496 16.7262 0.468304 17.0516 0.708264 17.2916C0.948224 17.5315 1.27368 17.6663 1.61303 17.6663H16.3873C16.7266 17.6663 17.0521 17.5315 17.2921 17.2916C17.532 17.0516 17.6668 16.7262 17.6668 16.3868V1.61255C17.6668 1.27319 17.532 0.947735 17.2921 0.707776C17.0521 0.467816 16.7266 0.333008 16.3873 0.333008ZM5.49979 15.0988H2.89377V6.82097H5.49979V15.0988ZM4.19498 5.67384C3.89937 5.67218 3.61088 5.58298 3.36592 5.41752C3.12095 5.25205 2.93049 5.01772 2.81857 4.74412C2.70666 4.47051 2.6783 4.16988 2.73707 3.88017C2.79585 3.59046 2.93913 3.32465 3.14883 3.11629C3.35853 2.90794 3.62525 2.76637 3.91533 2.70945C4.20541 2.65254 4.50586 2.68283 4.77874 2.7965C5.05162 2.91017 5.28472 3.10213 5.44861 3.34815C5.6125 3.59417 5.69984 3.88323 5.69961 4.17884C5.7024 4.37675 5.66531 4.5732 5.59056 4.75648C5.51581 4.93975 5.40493 5.1061 5.26452 5.24561C5.12411 5.38512 4.95705 5.49493 4.7733 5.56851C4.58955 5.64208 4.39287 5.6779 4.19498 5.67384ZM15.1053 15.1061H12.5005V10.5837C12.5005 9.25005 11.9336 8.83838 11.2017 8.83838C10.429 8.83838 9.67063 9.42097 9.67063 10.6175V15.1061H7.06461V6.82699H9.57072V7.97412H9.60442C9.856 7.46495 10.7371 6.59468 12.0816 6.59468C13.5357 6.59468 15.1066 7.45773 15.1066 9.98551L15.1053 15.1061Z" />
  </svg>
);


};

export const MediumIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-heading", className)}
    >
      <path d="M11.2812 6.18975C11.2812 9.33201 8.75578 11.8793 5.6407 11.8793C2.52561 11.8793 0 9.33144 0 6.18975C0 3.04806 2.52542 0.5 5.6407 0.5C8.75597 0.5 11.2812 3.04749 11.2812 6.18975Z" />
      <path d="M17.4688 6.18947C17.4688 9.14723 16.2061 11.5459 14.6485 11.5459C13.0908 11.5459 11.8281 9.14723 11.8281 6.18947C11.8281 3.2317 13.0906 0.833008 14.6483 0.833008C16.2059 0.833008 17.4686 3.23094 17.4686 6.18947" />
      <path d="M19.9998 6.19014C19.9998 8.83957 19.5557 10.9887 19.0078 10.9887C18.4599 10.9887 18.0161 8.84015 18.0161 6.19014C18.0161 3.54014 18.4601 1.3916 19.0078 1.3916C19.5555 1.3916 19.9998 3.53994 19.9998 6.19014Z" />
    </svg>
  );
};
