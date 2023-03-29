import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Belajar React Routing</h1>

     <nav>
      <Link to="/home" className='mr'>Home</Link>
      <Link to="/about" className='mr'>About</Link>
     </nav>

     <Outlet/>
    </div>
  );
}

export default App;
