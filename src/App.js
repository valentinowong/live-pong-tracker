import logo from './logo.svg';
import './App.css';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Team name="one"/>
        <Team name="two"/>
      </header>
    </div>
  );
}

export default App;
