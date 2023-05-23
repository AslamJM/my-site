import { FC } from "react";
import ProjectCard from "../projects/ProjectCard";
import { allProjects } from "contentlayer/generated";

interface RecentProjectsProps {}

const getProjects = async () => {
  return allProjects[0];
};

// @ts-expect-error Server Component
const RecentProjects: FC<RecentProjectsProps> = async ({}) => {
  const project = await getProjects();
  return (
    <div className="flex items-center justify-center my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          className="col-span-1"
          title={project.title}
          image={project.image}
          exerpt={project.exerpt || ""}
          source={project.github}
          slug={project.slug}
        />
        <ProjectCard
          className="col-span-1"
          title={project.title}
          image={project.image}
          exerpt={project.exerpt || ""}
          source={project.github}
          slug={project.slug}
        />
        <ProjectCard
          className="col-span-1"
          title={project.title}
          image={project.image}
          exerpt={project.exerpt || ""}
          source={project.github}
          slug={project.slug}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
