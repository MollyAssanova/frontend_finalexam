import React, { useState, useEffect, Suspense } from "react";
import { Provider } from 'react-redux';
import store from './store'; 
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProjectProvider } from './components/context/ProjectContext';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <ProjectProvider>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
          <div id="home">
  <Home />
</div>
<div id="about">
  <About />
</div>
<div id="projects">
  <Projects />
</div>
</Suspense>
          <Footer />
        </div>
        </ProjectProvider>
    </Provider>
  );
}

export default App;
