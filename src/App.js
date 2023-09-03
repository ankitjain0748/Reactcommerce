import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Forget from './components/Forget';
import Resetpass from './components/ResetPass';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
     <Routes>
      <Route path= "/forget" element={<Forget/>}/>
      <Route path= "/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path ='/' element={<Home/>}></Route>
      <Route path ='/reset' element={<Resetpass/>}/>
      </Routes>
<Footer/>
     </Router>
    </div>
  );
}

export default App;
