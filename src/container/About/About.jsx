import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";

import { images } from "../../constants";

import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log(abouts);
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good development</span> <br /> means{" "}
        <span>Good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} className="" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default About;
