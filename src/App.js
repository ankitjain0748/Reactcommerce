import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Forget from './Components/Forget';
import Resetpass from './Components/ResetPass';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
     <Routes>
      <Route path= "/forget" element={<Forget/>}/>
      <Route path= "/signup" element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path ='/reset' element={<Resetpass/>}/>
      </Routes>
<Footer/>
     </Router>
    </div>
  );
}

export default App;
