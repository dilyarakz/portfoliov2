import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
