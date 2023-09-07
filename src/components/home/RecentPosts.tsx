import React from "react";
import BlogCard from "../blog/BlogCard";

const RecentPosts = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BlogCard
        title="title of my blog post"
        exerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus animi maiores!"
      />
      <BlogCard
        title="title of my blog post"
        exerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus animi maiores!"
      />
      <BlogCard
        title="title of my blog post"
        exerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus animi maiores!"
      />
      <BlogCard
        title="title of my blog post"
        exerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus animi maiores!"
      />
      <BlogCard
        title="title of my blog post"
        exerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus animi maiores!"
      />
    </div>
  );
};

export default RecentPosts;
