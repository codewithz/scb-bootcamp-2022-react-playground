
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { RoutingPath } from './components/RoutingPath';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>WELCOME TO Standard Chartered React Application</h1>
        <hr />
        <RoutingPath />

      </div>
    </BrowserRouter>
  );
}

export default App;
