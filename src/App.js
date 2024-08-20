import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/Forget/ForgetPassword';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
    </Routes>
   </Router>
  );
}

export default App;
