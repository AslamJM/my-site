import { FC } from "react";

interface BlogCardProps {
  title: string;
  exerpt: string;
}

const BlogCard: FC<BlogCardProps> = ({ title, exerpt }) => {
  return (
    <div className="my-2 py-2 bg-light/70">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-md">{exerpt}</p>
    </div>
  );
};

export default BlogCard;
