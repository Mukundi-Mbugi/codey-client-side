import './index.css'
import './App.css';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <header 
           className="App-header">
        
        <Home />

      </header>
    </div>
  );
}

export default App;
