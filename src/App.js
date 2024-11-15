
import './App.css';
import About from "./components/about/About.js";
import HowToInstall from './components/howtoinstall/HowToInstall.js';
import FeedBack from './components/feedback/FeedBack.js';

function App() {
  return (
    <div className="background">
      <div className="container">
        <About />
        <HowToInstall />
        <FeedBack />
      </div>
    </div>

  );
}

export default App;
