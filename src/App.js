// React Imports
// import { useState } from "react";
// React Router Bootstrap Imports
// import { LinkContainer } from 'react-router-bootstrap';
// Custom Imports
import "./App.css";
import { About, ContactForm, Footer, Header, Hero, Menu } from "./components";

const App = () => {
  return (
    <div
      // className="p-1"
      id="home"
    >
      <Header />
      <Hero />
      <About />
      <Menu />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
