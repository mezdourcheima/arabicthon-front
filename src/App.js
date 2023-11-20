// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Azrar from './components/azrar';
import Footer from './components/footer';
import Silah from './components/silah';
import KounMoutamizan from './components/koun_moutamayizan';
import Quiz from './components/quiz';
import Form from './components/form';
import Home from './sections/home';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a request to your Flask backend
    fetch('http://localhost:5000')  // Update the URL if your Flask app is running on a different port
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/استطلاع" component={Quiz} />
          <Route path="/تواصل معنا" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
