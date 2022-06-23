import './index.css'
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header 
           className="App-header">
        
        <Home />
      </header>
    </div>
  );
}

export default App;
