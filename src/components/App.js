import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Diploma from "./Diploma";
import Modules from "./Modules";
import Schools from "./Schools";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

function App() {
  return (
    <div className="app">
    
    <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />

  
  <Route path="diploma" element={<Schools />}>
    <Route index element={<h3>Select a school from above</h3>} />
    <Route path=":schoolId" element={<Diploma />}>
      <Route index element={<h3>Select a diploma from above</h3>} />
      <Route path=":moduleId" element={<Modules />}>
        <Route path=":sessionId" element={<Session />} />
      </Route>
    </Route>
  </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2026 | <a href="https://www.rp.edu.sg/home">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
