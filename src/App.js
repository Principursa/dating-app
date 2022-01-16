import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Header from './components/header/Header';
import Profile from './pages/Profile';
import Girls from './pages/Girls';
import Guys from './pages/Guys';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/girls" element={<Girls/>}/>
        <Route exact path="/guys" element={<Guys/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
