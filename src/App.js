import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
          <NavBar />
        <Routes>
                <Route  exact path="/"  element={<HeroSection/>} />
                {/* <Route path="/add-student"  element={<AddStudent/>}/> */}
          </Routes>
          <Footer/>
      </Router>
    
    </>
  );
}

export default App;
