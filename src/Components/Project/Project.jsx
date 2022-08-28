import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import "./Project.scss";

const Project = () => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { title } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const filteredData = data.filter((work) => work.title.includes(title));
      setProject(filteredData);
    });

    setIsLoading(false);
  }, []);
  console.log(project);

  return (
    <div className="app__project">
      {isLoading && <h1 className="head-text">Please wait...</h1>}
      {project && (
        <>
          <h1 className="head-text">{project.title}</h1>

          {/* <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img
                className=""
                src={urlFor(project.imgUrl)}
                alt={project.name}
              />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div> */}
        </>
      )}
      <button onClick={() => navigate(-1)}>Return</button>
    </div>
  );
};

export default Project;
