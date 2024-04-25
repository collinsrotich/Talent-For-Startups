import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/about.js";
import Contact from"./components/Contact.js";
import Signup from "./components/Signup.js";

function App() {
  return (
    <Router>
    <div className="App">
        
        <Navbar/>
        <Routes>
            <Route path="/Home"  element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
    </div>
</Router>
  );
}

export default App;
