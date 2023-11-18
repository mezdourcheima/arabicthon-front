import './App.css';
import Navbar from './components/navbar';
import Azrar from './components/azrar';
import Footer from './components/footer';
import Sila from './components/sila'
import SilatAlyawm from './components/silat_alyawm';
function App() {
  return (
    <div className="App">
      <div>
         <Navbar/>
         <Azrar/>
          <Sila/>
          <Footer/>
     
    </div>
    </div>
  );
}

export default App;
