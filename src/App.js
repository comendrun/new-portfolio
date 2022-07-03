import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Work from "./Components/Work";

function App() {
  const [darkMode, setDarlMode] = useState(true);
  return (
    <div className={`app ${darkMode && "dark"}`}>
      <Header darkModeOnClick={() => setDarlMode((preValue) => !preValue)} />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
