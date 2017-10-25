import React, { Component } from "react";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Section heading="What is it?">

        </Section>
        <Section heading="How does it work?">

        </Section>
        <Footer />
      </div>
    );
  }
}

export default App;
