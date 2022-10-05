import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <h3>WELCOME TO MY BLOG</h3>
        <Home/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
