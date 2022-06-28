import React, { useState, useEffect } from "react";
import Project from "./Project";
import { useFetch } from "../hooks/useFetch";
import { nanoid } from "nanoid";

export default function Projects() {
  const [url, setUrl] = useState("http://localhost:3000/projects");
  const { data: projects, isPending, error } = useFetch(url);

  function mappingThroughIcons(parent, child) {
    parent.map((each) => {
      console.log(each);
      return <i title="" className={child}></i>;
    });
  }
  //   mappingThroughIcons(projects[0].tech);

  const mappingThroughProjects = () => {
    if (projects) {
      const orderedByLatestFirst = projects.sort((a, b) =>
        a.id > b.id ? -1 : 1
      );
      return orderedByLatestFirst.map((project) => {
        // console.log(mappingThroughIcons(project.tech));
        return (
          <Project
            key={nanoid()}
            name={project.title}
            id={project.id}
            live={project.links.live}
            mobImage={project.images.mobile}
            icons={project.tech.map((each) => {
              return (
                <i
                  title={each.name}
                  key={nanoid()}
                  className={each.display}
                ></i>
              );
            })}
          />
        );
      });
    }
  };
  //   console.log(mappingThroughProjects());

  return (
    <div className="portfolio">
      {error && <p>{error}</p>}
      {isPending && <p>Loading ...</p>}
      {mappingThroughProjects()}
    </div>
  );
}
