import React from 'react';
import SilatAlyawm from './silat_alyawm';


const Silat = () => {
  const containerStyle = {
    padding: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted to move main text to the top
    textAlign: 'center',
    backgroundImage: 'url("/pics/bg_pic2.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  const mainTextStyle = {
    fontFamily: 'GE Jarida',
    fontSize: '60px',
    fontWeight: '900',
    lineHeight: '75px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#078567',
    marginTop: '100px', // Adjusted to add space from the top
  };

  const textStyle = {
    width: '906.97px',
    height: '139.04px',
    top: '1033.5px',
    left: '235px',
    fontFamily: 'Tajawal',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'center',
    direction: 'rtl',
  };
  

 
  
 

  const arabicText = `«النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح. يساعد هذا النص في توفير تصور تقريبي لشكل الصفحة والتصميم 
  قبل وجود النص النهائي.«النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح. يساعد هذا النص في توفير تصور تقريبي لشكل الصفحة
   والتصميم قبل وجود النص النهائي.«النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح. 
  `;

  return (
    <div className="random-topics-wrapper" style={containerStyle}>
      <div style={mainTextStyle}>
        تعرّف على صِلَة
      </div>
      <div style={textStyle}>
        {arabicText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
     <SilatAlyawm/>
    </div>
  );
};

export default Silat;
