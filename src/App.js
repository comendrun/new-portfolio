import "./app.scss";

import { About, Header, Testimonials, Footer, Skills, Work } from "./container";

import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Components";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(typeof theme);

  return (
    <div className="app" id={theme}>
      <BrowserRouter>
        <Navbar />
        <Header />
        <ProjectsPage />
        <Skills />
        <About />
        {/* <Testimonials /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
