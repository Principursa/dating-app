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
import Main from './pages/Main';

function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        <Route  path="/profile" element={<Profile/>}/>
        <Route  path="/girls" element={<Girls/>}/>
        <Route  path="/guys" element={<Guys/>}/>
        <Route exact path="/" element={<Main/>}/>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
