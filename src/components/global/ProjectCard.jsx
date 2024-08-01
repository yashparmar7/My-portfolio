import {
    Card,
    CardContent,
    CardHeader,
    // CardDescription,
    // CardFooter,
    // CardTitle,
  } from "@/components/ui/card";
  import { Button } from "../ui/button";
  
  // eslint-disable-next-line react/prop-types
  export const ProjectCard = ({ imageUrl, title, description }) => {
    return (
      <Card>
        <CardHeader>
          <img
            src={imageUrl}
            width={"550"}
            height={"310"}
            alt={title}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex gap-6 mt-3">
            <Button variant={"default"}>Live Demo</Button>
            <Button variant={"outline"}>Source Code</Button>
          </div>
        </CardContent>
      </Card>
    );
  };
  