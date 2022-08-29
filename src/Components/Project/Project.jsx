import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

import { motion } from "framer-motion";

import "./Project.scss";
import PortableTextComponent from "../PortableTextComponent/PortableTextComponent";

const Project = () => {
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { title } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const filteredData = data.filter((work) => work.title.includes(title));
      setProject(filteredData[0]);
    });

    setIsLoading(false);
  }, [title]);

  console.log(project?.techStack);

  return (
    <div className="app__project">
      {isLoading && <h1 className="head-text">Please wait...</h1>}
      {project && (
        <>
          <h1 className="head-text">{project.title}</h1>
          <div className="app__project-body-head">
            <PortableTextComponent>{project.body.head}</PortableTextComponent>
          </div>

          <div className="app__project-item app__flex">
            <div className="app__project-img app__flex">
              <img
                className=""
                src={urlFor(project.imgUrl)}
                alt={project.name}
              />
            </div>

            <div className="app__project-tech-stack">
              {project.techStack.map((tech, index) => (
                <div title={tech.technology} className="app__project-tech-stack-img">
                  <img
                    key={`${index}-tech-stacks-${tech}`}
                    src={urlFor(tech.techIcon)}
                    alt={tech.technology}
                    className=""
                  />
                </div>
              ))}
            </div>

            <div className="app__project-content app__flex">
              <div className="app__project-body">
                <div className="app__project-body-overview">
                  <PortableTextComponent>
                    {project.body.overview}
                  </PortableTextComponent>
                </div>

                <div className="app__project-body-my-process">
                  <PortableTextComponent>
                    {project.body.myProcess}
                  </PortableTextComponent>
                </div>

                <div className="app__project-body-acknowledgement">
                  <PortableTextComponent>
                    {project.body.acknowledgement}
                  </PortableTextComponent>
                </div>

                {/* end of app__project-tag div ==> */}
              </div>
              {/* end of app__project-content div ==> */}
            </div>
            {/* end of app__project-item div ==> */}
          </div>
          <div className="app__project-tags app__flex">
            {project.tags.map((tag, index) => (
              <p
                className="app__project-tag p-text"
                key={`${tag}-${index}-${tag}`}
              >
                #{tag}
              </p>
            ))}
          </div>
        </>
      )}
      <Link to="/#work">Return</Link>
    </div>
  );
};

export default Project;
