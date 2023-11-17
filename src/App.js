import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div>
      {/* Include the Navbar component */}
      <Navbar />

      {/* The rest of your application content goes here */}
      <div>
        {/* Your other components, pages, etc. */}
        <h1>Welcome to My App!</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
