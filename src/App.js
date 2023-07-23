import React from "react";

import {
  About,
  Footer,
  Header,
  Resume,
  Skills,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";
//import {ToggleDarkMode } from "./ToggleDarkMode";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />

    <Footer />
  </div>
);

export default App;
