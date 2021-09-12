import logo from './logo.svg';
import './styles/App.scss';
import Landing from "./sections/Landing"
import About from "./sections/About"
import GetInvolved from "./sections/GetInvolved"

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <GetInvolved />
    </div>
  );
}

export default App;
