
import './App.css';
import About from "./components/about/About.js";
import HowToInstall from './components/howtoinstall/HowToInstall.js';

function App() {
  return (
    <div className="background">
      <div className="container">
        <About />
        <HowToInstall />
      </div>
    </div>

  );
}

export default App;
