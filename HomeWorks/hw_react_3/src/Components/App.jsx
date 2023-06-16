import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./Pages/MainPage"
import AllPosts from "./Pages/AllPosts";
import MyPosts from "./Pages/MyPosts";



function App() {
  
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/posts" element={<AllPosts/>}/>
        <Route path="/posts/:id" element={<MyPosts/>}/>
      </Routes>
    </Router>
    
    </>
    );
}

export default App;
