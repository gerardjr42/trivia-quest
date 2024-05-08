import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Form from "./pages/Form";
import About from "./pages/About";
import Trivia from "./pages/Trivia";
import { useState } from "react";

function App() {
  const [questionaire, setQuestionaire] = useState([]);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/form" element={<Form setQuestionaire={setQuestionaire} questionaire={questionaire}/>} />
          <Route path="/trivia" element={<Trivia questionaire={questionaire}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
