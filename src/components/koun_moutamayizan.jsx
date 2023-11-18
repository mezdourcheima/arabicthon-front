import React from 'react';
import subscriptionImage from '../pics/Group-2.svg';

const KounMoutamizan = () => {
  const containerStyle = {
    padding: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted to move main text to the top
    textAlign: 'center',
    backgroundImage: 'url("/pics/bg_pic3.png")',
    backgroundSize: '100% 100%',
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
    marginTop: '10px', // Adjusted to add space from the top
    direction: 'rtl',
  };

  const secondaryTextStyle = {
    fontFamily: 'Tajawal',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 1)',
    marginTop: '40px',
    marginRight: '100px',
    marginLeft: '250px', // Adjusted to move text closer to the image
    direction: 'rtl',
  };

  const vipTextStyle = {
    fontFamily: 'Tajawal',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'right',
    color: 'rgba(208, 169, 58, 1)',
    padding: '0 5px', // Adjusted padding to separate background from text
  };

  const subscriptionContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Align items vertically
    marginTop: '30px',
  };
  const subscriptionContainerStyleBP = {
    display: 'flex',
    flexDirection: 'column', // Align items horizontally
    alignItems: 'center', // Align items vertically
    marginTop: '-40px',
    marginLeft: '150px', // Adjusted margin to move image closer to the text
    marginRight:'10px',
  }

  const imageStyle = {
    width: '276px', // Adjust the width as needed
    height: '184px', // Adjust the height as needed
    marginRight: '20px', // Adjusted margin to separate image from text
    marginLeft: '50px', // Adjusted margin to move image closer to the text
 };


  const buttonStyle = {
    fontFamily: 'Almarai',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(101, 192, 170, 1)',
    color: '#FFFFFF',
    borderRadius: '8px',
    cursor: 'pointer',


  };
  const handleButtonClick = () => {
    // Handle the click event for the button here
    alert('Button Clicked!');
  };

  return (
    <div className="random-topics-wrapper" style={containerStyle}>
      <h1 style={mainTextStyle}> كن متميّزا ! </h1>
      <div style={subscriptionContainerStyle}>
        <div style={subscriptionContainerStyleBP}>
            <img src={subscriptionImage} alt="Subscription Image" style={imageStyle} />
            <button style={buttonStyle} onClick={handleButtonClick}>اشترك الآن</button>
        </div>
        <div>
          <p style={secondaryTextStyle}>
            خدمة <span style={vipTextStyle}>VIP</span> الخاصة بنا تمنحك تجربة استثنائية! تميّز و اجعل تفاعلك مع
            اللغة العربية أكثر سهولة وإثراءً، حيث يُتاح لك رفع صورة نصية واستخراج العلاقات بين الكلمات بكل سهولة.
            ببساطة، قُم بتحمـيل الصورة، ودعنا نتولــــــى باقي العمل باستخدام أحدث تقنــــيات معالجة اللغات
            الطبيعية. نحن نفخر بتوفير أمان وخصوصية لا مثيل لهمـــــــا لمستخدمي VIP. اختر هذه الخدمة الفريدة
            واحصل على إمكانيات استخراج النصوص والتحليل اللغوي بمستوى راقٍ. تعمّق في عالم اللغة العربية بشكل
            مميز، واستمتع برحلة فريدة من نوعها في فهم وتحليل النصوص.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KounMoutamizan;
