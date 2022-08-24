import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Detail from "./components/detail";
import Nav from "./components/nav";
import "./style";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
      <footer></footer>
    </div >
  );
}

export default App;
