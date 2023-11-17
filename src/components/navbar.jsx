import React from 'react';

const Navbar = () => {
  const linkStyle = {
    fontFamily: 'Tajawal',
    fontWeight: 700,
    color: '#078567',
    fontSize: '18px',
    lineHeight: '21.6px',
    textAlign: 'center',
    textDecoration: 'none',
  };

  const listItemStyle = {
    padding: '21px 47px', // Equal padding on top and bottom, adjusted margin for horizontal spacing
    display: 'flex',
    alignItems: 'center', // Vertical centering
  };

  return (
    <nav style={{ backgroundColor: '#B2CAC6', padding: '10px', height: '64px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
        <li style={listItemStyle}><a href="/contact-us" style={linkStyle}>تواصل معنا</a></li>
        <li style={listItemStyle}><a href="/polls" style={linkStyle}>استطلاع</a></li>
        <li style={listItemStyle}><a href="/become-outstanding" style={linkStyle}>كن متميزا</a></li>
        <li style={listItemStyle}><a href="/word-of-the-day" style={linkStyle}>كلمة اليوم</a></li>
        <li style={listItemStyle}><a href="/about" style={linkStyle}>عن صلة</a></li>
        <li style={listItemStyle}><a href="/" style={linkStyle}>الرئيسية</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
