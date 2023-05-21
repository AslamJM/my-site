import { FC } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="w-full py-2 relative">
      <h3 className="font-semibold text-lg xl:text-xl">{title}</h3>
      <div className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-dark to-light" />
    </div>
  );
};

export default SectionTitle;
