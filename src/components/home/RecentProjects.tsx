import { FC } from "react";
import ProjectCard from "../projects/ProjectCard";
import { allProjects } from "contentlayer/generated";

interface RecentProjectsProps {}

const homeProjects = allProjects.slice(0, 3);

const RecentProjects: FC<RecentProjectsProps> = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeProjects.map((project) => (
          <ProjectCard
            key={project._id}
            className="col-span-1"
            title={project.title}
            image={project.image}
            exerpt={project.exerpt || ""}
            source={project.github}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
