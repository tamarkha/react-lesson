import "./App.css";
import Posts from "./pages/posts/Index";
import Services from "./pages/services/Index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Index";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className="Container"> */}
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Posts />}></Route>
              <Route path="/Services" element={<Services />}></Route>
            </Routes>
          </div>
          <Footer />
          {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
