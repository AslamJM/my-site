import { FC } from "react";
import ProjectCard from "../projects/ProjectCard";

interface RecentProjectsProps {}

const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          className="col-span-1"
          title="my project"
          image="test"
          exerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illum sapiente eligendi necessitatibus quasi, nam odio accusantium cum rem quia."
        />
        <ProjectCard
          className="col-span-1"
          title="my project"
          image="test"
          exerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illum sapiente eligendi necessitatibus quasi, nam odio accusantium cum rem quia."
        />
        <ProjectCard
          className="col-span-1"
          title="my project"
          image="test"
          exerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illum sapiente eligendi necessitatibus quasi, nam odio accusantium cum rem quia."
        />
      </div>
    </div>
  );
};

export default RecentProjects;
