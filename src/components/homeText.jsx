import React from 'react';
import "../styles/fonts.css"
import SearchBar from './searchBar';


const TextStyle = {
  fontFamily: 'Childos Arabic DEMO',
  fontSize: '84px',
  fontWeight: 300,

  lineHeight: '130px',
  letterSpacing: '0em',
  textAlign: 'center',
  zIndex: 2, // Set a higher z-index
  position: 'absolute', // Set position to absolute
  top: '50%', // Adjust as needed
  left: '50%', // Adjust as needed
  transform: 'translate(-50%, -50%)', // Center the text
  color: '#ffffff', // Change text color to white
  textShadow: '0px 4px 4px 0px #000000CC', // Add text shadow


};

const ArabicText = () => {
  return (
    <div style={TextStyle}>
      العلاقات الدلالية
      <SearchBar />
    </div>
  );
};

export default ArabicText;
