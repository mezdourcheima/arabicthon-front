import './App.css';
import Navbar from './components/navbar';
import Azrar from './components/azrar';
import Footer from './components/footer';
import Sila from './components/sila'
import KounMoutamizan from './components/koun_moutamayizan';

function App() {
  return (
    <div className="App">
      <div>
         <Navbar/>
         <Azrar/>
          <Sila/>
          <KounMoutamizan/>
          <Footer/>
     
    </div>
    </div>
  );
}

export default App;
