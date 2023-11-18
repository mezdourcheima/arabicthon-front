import './App.css';
import Navbar from './components/navbar';
import Azrar from './components/azrar';
import Footer from './components/footer';
import Sila from './components/sila';
import Form from './components/form'
import Quiz from './components/quiz';

function App() {
  return (
    <div className="App">
      <div>
          <Navbar />
          <Quiz />
          <Footer />
     
    </div>
    </div>
  );
}

export default App;
