import React from 'react';

const Sila = () => {
  const containerStyle = {
    backgroundImage: 'url("/pics/bg_pic2.png")',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    position: 'relative', // Added position relative to position absolute children correctly
    width: '100vw', // Set the width to 100% of the viewport width
  };

  const mainTextStyle = {
    fontFamily: 'GE Jarida',
    fontSize: '60px',
    fontWeight: '900',
    lineHeight: '75px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#078567',
  };

  const textStyle = {
    fontFamily: 'Tajawal',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginTop: '20px',
  };

  const boxStyle = {
    width: '1072.99px',
    height: '328.69px',
    border: '1px solid #049C78',
    borderRadius: '50px',
    bottom: '0', // Adjusted to stay at the bottom
    left: '50%', // Adjusted to center the box
  };
 
  

  const arabicText = `
    «النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح.
    يساعد هذا النص في توفير تصور تقريبي لشكل الصفحة والتصميم قبل وجود النص النهائي.
    «النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح.
    يساعد هذا النص في توفير تصور تقريبي لشكل الصفحة والتصميم قبل وجود النص النهائي.
    «النص العربي» هو نص بديل يُستخدم عادة في صناعة الطباعة وتنسيق الصفحات، ليحل محل النص النهائي عندما يكون النص غير متاح.
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
      <div style={boxStyle}></div>
    </div>
  );
};

export default Sila;
