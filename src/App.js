// Styling Imports
import "./App.css";
// import "../scss/custom.scss";
// Component Imports
import {
  About,
  Accolades,
  ContactForm,
  Footer,
  Header,
  Hero,
  Menu,
} from "./components";

const App = () => {
  return (
    <div id="home">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Accolades />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
