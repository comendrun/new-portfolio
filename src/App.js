import "./app.scss";

import { About, Header, Testimonials, Footer, Skills, Work } from "./container";

import { Navbar } from "./Components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
