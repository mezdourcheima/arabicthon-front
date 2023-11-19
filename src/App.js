import './App.css';
import Navbar from './components/navbar';
import Azrar from './components/azrar';
import Footer from './components/footer';
import Silah from './components/silah'
import KounMoutamizan from './components/koun_moutamayizan';
import Quiz from './components/quiz';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <div>
         <Navbar/>
         <Azrar/>
         <Silah/>
         <KounMoutamizan/>
         <Footer  />

    </div>
    </div>
  );
}

export default App;
