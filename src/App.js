import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./component/Header/Header.js";
import Home from "./component/Home/Home.js";
import Favourite from "./component/Favourite/Favourite.js";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourite' element={<Favourite/>} />
      </Routes>
    </Router>
  );
}

export default App;
