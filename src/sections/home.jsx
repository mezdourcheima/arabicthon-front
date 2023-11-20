// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar';
import Azrar from '../components/azrar';
import Footer from '../components/footer';
import Silah from '../components/silah';
import KounMoutamizan from '../components/koun_moutamayizan';
import Quiz from '../components/quiz';
import Form from '../components/form';

function Home() {


  return (
      <div >
        <Navbar />
        <Azrar />
        <Silah/>
        <KounMoutamizan />
        <Footer />
      </div>
  );
}

export default Home;
