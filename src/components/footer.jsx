import React from 'react';
import Youtube from '../icons/Vector.svg';
import linkedin from '../icons/linkedin-original.svg';
import Logo from '../icons/Group15.svg';

const Footer = () => {
  const footerStyle = {
    height: '300.03px',
    backgroundImage: 'url("/pics/footer.png")',
    color: '#FFFFFF',
    position: 'relative',
    width: '100vw', // Set the width to 100% of the viewport width
    display: 'flex', // Use flexbox to arrange items horizontally
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between', // Add space between the items
    backgroundSize: 'auto', // Preserve the original dimensions of the background image
    backgroundPosition: 'center', // Center the background image
  };

  const textContainerStyle = {
    fontFamily: 'Tajawal',
    fontWeight: 500,
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    alignItems: 'flex-end', // Align items to the right
    gap: '10px', // Add space between text items
  };

  const iconsContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Align items horizontally
    gap: '10px', // Adjust the gap between the icons
    paddingLeft: '200px', // Adjust the padding to move the icons to the left
  };
  const logoStyle = {
    marginRight: '100px', // Adjust the margin to separate the logo from the line
  };

  const lineStyle = {
    width: '2px',
    height: '40%', // Adjust the height of the line
    backgroundColor: '#FFFFFF',
  };

  const rightsText = 'رقم الإصدار 2.0 - الحقوق محفوظة – مجمع الملك سلمان العالمي للغة العربية © 2023';

  const navItems = ['تواصل معنا', 'استطلاع', 'كن متميزا', 'كلمة اليوم', 'عن صلة'];

  const navItemsStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row', // Align items horizontally
    gap: '17px',
  };

  return (
    <footer style={footerStyle}>
      <div style={iconsContainerStyle}>
        <img src={linkedin} alt="linkedin" />
        <img src={Youtube} alt="Youtube" />
      </div>
      <div style={textContainerStyle}>
        <ul style={navItemsStyle}>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{rightsText}</p>
      </div>
      <div style={lineStyle}></div>
      <div>
          <img src={Logo} alt="Logo" style={logoStyle} />
       
      </div>
    </footer>
  );
};

export default Footer;
