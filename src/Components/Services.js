import React from "react";

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Frontend Development</h3>
          <p>
            I have experience working wih different methods of Frontend
            development and mainly i enjoy working with ReactJS library.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>Different Work Types</h3>
          <p>
            I am open for on-site or hybrid job positions in Munich, Ingolstadt,
            Augsburg, or Nurnberg, as well as remote work. Also Im open for any
            type of work contracts including Full-Time, Part-Time, Temporary,
            Freelancing or Internship.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>Technical Skill</h3>
          <p>
            I have decent understanding in main tools of Frontend Development
            and i thrive on learningevery day and in every possible way.
          </p>
        </div>
        {/* <!-- / service --> */}
      </div>
      {/* <!-- / services --> */}

      <div>
        <ul className="tech-skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>API</li>
          <li>Flex-Box</li>
          <li>CSS-Grid</li>
          <li>SASS</li>
          <li>Responsive Design</li>
          <li>Mobile-first Design</li>
          <li>CSS Custom Properties</li>
          <li>JSON</li>
          <li>AJAX</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
