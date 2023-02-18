import Navbar from './Comp/Navbar';
import "./App.css";
import Home from './Comp/Home';
import About from './Comp/About';
import Anouncement from './Comp/Anouncement';
import Community from './Comp/Community';
import {Routes,Route} from "react-router-dom";
import Login from './Comp/Login'
import SignUp from './Comp/SignUp';
import Chatbox from './Comp/Chatbox';
function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/anounce' element={<Anouncement/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/chatbox' element={<Chatbox/>}/>

      </Routes>
    </div>
    
  );
 }

 export default App;


