import logo from './logo.svg';
import Landingpage from './components/landing-page';
import ClassReview from './components/class-review';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element={<Landingpage/>}></Route>
        <Route exact path = "/classreview/" element={ <ClassReview/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
