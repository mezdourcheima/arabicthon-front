// silat_alyawm.jsx
import React from 'react';
import MyIcon from '../icons/Group1.svg' ; 
import Group3 from '../icons/Group 3.svg' ;
import Group5 from '../icons/Group 5.svg' ;
import Group from '../icons/Group.svg' ;


const SilatAlyawm = () => {
  const containerStyle = {
    padding: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

 
  const boxStyle = {
    width: '1072.99px',
    height: '328.69px',
    borderRadius: '5px',
    left: '183.5px',
    border: '1px solid #049C78',
    background: '#CAE5E1', // Added background color
    position: 'absolute',
    display: 'flex', // Added display flex to position icons and text in a row
    flexDirection: 'column', // Align items vertically
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    boxShadow: '0px 4px 13px 0px #00000040', // Added box shadow
    top: '158%',

  };

 
  const textStyle = {
    fontFamily: 'GE Jarida',
    fontSize: '60px',
    fontWeight: '900',
    lineHeight: '74.7px',
    letterSpacing: '0em',
    textAlign: 'right',
    color: '#474747',
    position: 'absolute',
    top: '-55px',
    right: '30px',
    direction: 'rtl',
  };
  
  const iconStyle = {
    width: '19.97px',
    height: '21px',
    color: '#078567',
    margin: '0 5px',
    top: '-10px', // Adjusted top position to move a bit higher

  };
  
  const MousamaraTextStyle = {
    fontFamily: 'Tajawal',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '43px',
    letterSpacing: '0.01em',
    textAlign: 'center',
    color: '#078567',
    marginLeft: '5px', // Adjusted margin
    display: 'flex', // Added display flex
    alignItems: 'center', // Center content vertically
    direction: 'rtl',
    top: '-10px', // Adjusted top position to move a bit higher

  };
  const buttonStyle = {
    border: 'none',
    fontFamily:'Tajawal-Regular',
    fontSize:'18px',
    width: '233px',
    height: '46px',
    padding: '15px 16px',
    borderRadius: '8px',
    position: 'absolute',
    fontFamily: 'Tajawal',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom, #049C78, #078568)', // Added gradient background
    color: '#FFFFFF',
    top: '85%', // Adjusted top position to center vertically
    left: '50%', // Adjusted left position to center horizontally
    transform: 'translate(-50%, -50%)', // Centering using transform
    cursor: 'pointer', // Added cursor style for indicating it's clickable

  };
  const MousamaraContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Added horizontal layout
    marginTop: '-120px', // Adjusted margin to separate additional content
  };


  const additionalContentStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '70px',
    width: 'auto', // Added width to take up full width
    justifyContent: 'space-between', // Adjusted to 'space-between'
  };

  const additionalIconStyle = {
    width: '20px',
    height: '20px',
    margin: '0 2px',
    color: '#078567',
    marginLeft: '40px',
    marginRight: '40px',
  };
  
  const additionalTextStyle2 = {
    flex: 1, // Added flex to take up remaining space
    fontFamily: 'Tajawal',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#078567',
    marginLeft: '10px',
    marginRight: '10px',
  };

  const handleButtonClick = () => {
    // Handle the click event for the button here
    alert('Button Clicked!');
  };

  const handleGroup5Click = () => {
    // Handle the click event for Group5 here
    alert('Group5 Clicked!');
  };

  return (
    <div className="silat-alyawm-wrapper" style={containerStyle}>
      <div style={boxStyle}>
        <div style={textStyle}>
          صِلَة اليوم
        </div>

        <div style={MousamaraContentStyle}>
            <img src={MyIcon} alt="My Icon" style={iconStyle} />
            <div style={MousamaraTextStyle}> مُسَامَرَة </div>
            <img src={MyIcon} alt="My Icon" style={iconStyle} />
        </div>
       

        <div style={additionalContentStyle}>
          <img src={Group3} alt="Additional Icon" style={additionalIconStyle} />
          <div style={additionalTextStyle2}>Talking With Others At Night.</div>
          <img src={Group5} alt="Additional Icon" style={additionalIconStyle} onClick={handleGroup5Click} />
          <img src={Group5} alt="Additional Icon" style={additionalIconStyle} onClick={handleGroup5Click} />
          <div style={additionalTextStyle2}>.اسم معنى: الحديث والمجالسة ليلًا</div>

        </div>

        <button style={buttonStyle}  onClick={handleButtonClick} >تعرّف على الكلمة</button>

      </div>
    </div>
  );
};

export default SilatAlyawm;
