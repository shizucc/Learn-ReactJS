import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
