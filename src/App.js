import logo from './logo.svg';
import './App.css';
import { UseCaseOneHome } from './components/UseCaseOne/UseCaseOneHome';
import { UseCaseTwoHome } from './components/UseCaseTwo/UseCaseTwoHome';

function App() {
  return (
    <div className="App">
      <h1>WELCOME TO Standard Chartered React Application</h1>
      <hr />
      {/* <UseCaseOneHome /> */}
      <UseCaseTwoHome />

    </div>
  );
}

export default App;
