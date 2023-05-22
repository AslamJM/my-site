import { GithubIcon } from "@/icons/social";
import Link from "next/link";
import { FC, HtmlHTMLAttributes } from "react";

interface ProjectCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
  exerpt: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  exerpt,
  image,
  className,
}) => {
  return (
    <div
      className={`p-6 border-[.5px] border-dark rounded-md relative ${className}`}
    >
      <div className="absolute w-[80px] h-[80px] bg-transparent rounded-tr-md border-dark border-t-4 border-r-4 -top-1 -right-1 -z-10" />
      <div className="absolute w-[80px] h-[80px] bg-transparent rounded-bl-md border-dark border-b-4 border-l-4 -left-1 -bottom-1 -z-10" />
      <div className="h-[150px] bg-dark/50 rounded-md w-full"></div>
      <h3 className="my-2 font-semibold text-xl">{title}</h3>
      <p className="text-md">{exerpt}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div className="h-6 w-6">
            <GithubIcon />
          </div>
          <Link
            href="/"
            className="ml-1 text-dark hover:text-red-600 font-semibold underline underline-offset-2 "
          >
            Code
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="text-md font-semibold underline underline-offset-2 text-dark hover:text-red-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
