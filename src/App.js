import "./app.scss";

import { About, Header, Testimonials, Footer, Skills, Work } from "./container";

import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Components";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <ProjectsPage />
        <Skills />
        <Testimonials />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
