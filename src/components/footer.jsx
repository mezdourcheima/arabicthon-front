import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: '1440px',
    height: '300.03px',
    backgroundImage: 'url("/pics/footer.png")',
    color: '#FFFFFF',
    position: 'relative',
  };

  const textContainerStyle = {
    fontFamily: 'Tajawal',
    fontWeight: 500,
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'space-between', // Add space between the items
    paddingRight: '280px', // Add some padding to separate text from the line
    paddingTop: '95px',
  };

  const lineStyle = {
    width: '2px',
    height: '40%', // Adjust the height of the line
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: '20%', // Adjust the top positioning
    right: '250px', // Adjust the right positioning to be next to the text
  };

  const rightsText = 'رقم الإصدار 2.0 - الحقوق محفوظة – مجمع الملك سلمان العالمي للغة العربية © 2023';

  const navItems = [
    'تواصل معنا',
    'استطلاع',
    'كن متميزا',
    'كلمة اليوم',
    'عن صلة',
  ];

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
      <div style={textContainerStyle}>
        <ul style={navItemsStyle}>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{rightsText}</p>
      </div>
      <div style={lineStyle}></div>
    </footer>
  );
};

export default Footer;
