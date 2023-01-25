import './App.css';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Sticky from 'react-sticky-el';
function App() {
  document.title="Shrirang"
  // document.body.style.backgroundColor="#B1F7B5"
  return (
    <div className="App">
     <Home />
     <Sticky className="navbar">
       <Navbar />
     </Sticky>
     <Hobbies />
     <Education/>
     <Footer/>
    </div>
  );
}

export default App;
