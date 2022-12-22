import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
    </div>

    
  );
}

export default App;
