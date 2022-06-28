import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
