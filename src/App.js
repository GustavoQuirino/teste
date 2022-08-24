import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sobre from './Sobre';

function App() {
  return (
    <BrowserRouter>
      <div className='Navbar'>
        <Link exact to='/'><h1>HOME</h1></Link>
        <Link exact to='/sobre'><h1>SOBRE</h1></Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
