import logo from './logo.svg';
import './App.css';
// import Parents from './components/ParentChildren/parents/parents';
import Counter from './components/counter/counter';
import Agify from './components/agify/agify';

function App() {
  
  const names = ["Maelisse", "Alexandre", "Jessie et du bois", "Pandémie", "Présent", "Ancienne Belgique", "Karembeu", "Marc Dorcel"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Parents listNames={names}/> */}
      {/* <Counter/> */}
      <Agify />
      </header>
    </div>
  );
}

export default App;
