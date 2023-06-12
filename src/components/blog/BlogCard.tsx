import { FC } from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  exerpt: string;
}

const BlogCard: FC<BlogCardProps> = ({ title, exerpt }) => {
  return (
    <Link href="" className="">
      <div className="my-2 py-3  px-4 bg-white  rounded shadow-sm">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-md">{exerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
