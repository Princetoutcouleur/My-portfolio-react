import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Projects from './components/project/project';
import About from './components/about/about'
import Contact from './components/contact/contact'
import Tools from './components/outils/tools';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
