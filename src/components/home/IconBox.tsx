import Link from "next/link";
import { FC, ReactNode } from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
} from "@/icons/social";

interface IconBoxProps {
  children: ReactNode;
  url: string;
  className: string;
}

export const socialIcons = [
  {
    Icon: <TwitterIcon />,
    url: "https:twitter.com",
    className: "mr-4",
  },
  {
    Icon: <GithubIcon />,
    url: "https:github.com/AslamJM",
    className: "mx-4",
  },
  {
    Icon: <LinkedInIcon />,
    url: "https:linkedin.com",
    className: "mx-4",
  },
  {
    Icon: <MediumIcon />,
    url: "https:medium.com",
    className: "ml-4",
  },
];

const IconBox: FC<IconBoxProps> = ({ children, url, className }) => {
  return (
    <div
      className={`w-10 h-10 2xl:w-12 2xl:h-12  p-2 border-[1px] rounded-md border-dark/50 shadow-sm shadow-dark/25 hover:shadow-lg hover:bg-white/50 ${className}`}
    >
      <Link href={url} target="_blank">
        {children}
      </Link>
    </div>
  );
};

export default IconBox;
