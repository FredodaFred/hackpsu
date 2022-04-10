import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassReview from "./ClassReview.jsx";
import LandingPage from "./LandingPage.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/classreview/" element={<ClassReview />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
