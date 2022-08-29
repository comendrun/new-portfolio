import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

import { motion } from "framer-motion";

import "./Project.scss";

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

  console.log(project);

  return (
    <div className="app__project">
      {isLoading && <h1 className="head-text">Please wait...</h1>}
      {project && (
        <>
          <h1 className="head-text">{project.title}</h1>

          <div className="app__project-item app__flex">
            <div className="app__project-img app__flex">
              <img
                className=""
                src={urlFor(project.imgUrl)}
                alt={project.name}
              />
            </div>
            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.shortDescription}
              </p>

              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>

              <div className="app__project-more-info">
                <PortableText value={project.moreInfo} />
              </div>
            </div>
          </div>
        </>
      )}
      <button onClick={() => navigate(-1)}>Return</button>
    </div>
  );
};

export default Project;
