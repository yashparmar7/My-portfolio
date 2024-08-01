import { ProjectCard } from "./ProjectCard";
export const ProjectSection = () => {
  return (
    <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent web development projects.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <ProjectCard
            imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4c0b775c-bafa-47f5-9df7-a43ff714b83a-2xy2q2.png&w=1920&q=75"
            title="Project One"
            description=" A modern web application built with React, Node.js, and MongoDB."
          />
          <ProjectCard
            imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3fd4e9e6-8489-4005-a6a7-29f0338745b1-jbkgcj.jpg&w=1920&q=75"
            title="Project Two"
            description="A responsive e-commerce website built with Next.js and Stripe."
          />
          <ProjectCard
            imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F08857d36-2392-4182-9f6f-5fb93a8e8543-2ytnxz.jpg&w=1920&q=75"
            title="Project Three"
            description=" A real-time chat application built with Socket.IO and React."
          />
        </div>
      </div>
    </section>
  );
};
