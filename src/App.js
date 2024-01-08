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
// Styling Imports
import "./App.css";

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
