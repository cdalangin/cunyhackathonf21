import logo from './logo.svg';
import './styles/App.scss';
import Landing from "./sections/Landing"
import About from "./sections/About"
import GetInvolved from "./sections/GetInvolved"
import Themes from "./sections/Themes"
import FAQ from "./sections/FAQ"
import Sponsors from "./sections/Sponsors"
import TBA from "./sections/TBA"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <GetInvolved />
      <Themes />
      <FAQ />
      <Sponsors />
      <TBA />
      <Footer />
    </div>
  );
}

export default App;
