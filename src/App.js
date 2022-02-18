import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import FirstUser from "./pages/FirstUser/index";

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/firstuser' element={ <FirstUser/> }/>
        
      </Routes>
   </BrowserRouter>
  );
}

export default App;
