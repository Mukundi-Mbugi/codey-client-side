import './index.css'
import './App.css';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar';


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
