import logo from './logo.svg';
import './App.css';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <Team name="one"/>
        <Team name="two"/>
      </main>
    </div>
  );
}

export default App;
