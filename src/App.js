import './App.css';
import { Routes, Route } from "react-router-dom";
import Contact from './routes/Contact';
import About from './routes/About';
import Login from './routes/Login';
import Notfound from './routes/Notfound'

function App() {
  return (
    <div className="App">
    {/* <h1>React-router-V6</h1> */}
    <Routes> {/*Routesで囲む*/}
      <Route path="/" element={ <Contact /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <Notfound /> } />
    </Routes>
  </div>
  );
}

export default App;
