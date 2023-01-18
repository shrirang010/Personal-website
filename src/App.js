import './App.css';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Education from './components/Education';
function App() {
  document.title="Shrirang"
  // document.body.style.backgroundColor="#B1F7B5"
  return (
    <div className="App">
     <Home />
     <Hobbies />
     <Education/>
     <Footer/>
    </div>
  );
}

export default App;
