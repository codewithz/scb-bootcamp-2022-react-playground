
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Navbar } from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { RoutingPath } from './components/RoutingPath';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <h2 className="lead">  WELCOME TO Standard Chartered React Application</h2>

        <hr />
        <RoutingPath />

      </div>
    </BrowserRouter>
  );
}

export default App;
