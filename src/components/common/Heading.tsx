import { FC, HtmlHTMLAttributes } from "react";

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadElement> {}

const Heading: FC<HeadingProps> = ({ className, children }) => {
  return <div>{children}</div>;
};

export default Heading;
