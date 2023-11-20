import React, { useState } from 'react';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const linkStyle = {
    fontFamily: 'Tajawal',
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: '18px',
    lineHeight: '21.6px',
    textAlign: 'center',
    textDecoration: 'none',
    borderBottom: selectedItem === null ? 'none' : '2px solid transparent', // Initial state or when nothing is selected
  };

  const listItemStyle = {
    padding: '21px 47px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const navItems = [
    { label: 'تواصل معنا', link: '/تواصل معنا' },
    { label: 'استطلاع', link: '/استطلاع' },
    { label: 'كن متميزا', link: '/كن متميزا' },
    { label: 'كلمة اليوم', link: '/word-of-the-day' },
    { label: 'عن صلة', link: '/about' },
    { label: 'الرئيسية', link: '/' },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <nav style={{ backgroundColor: '#61B8A3', padding: 0, height: '64px',     width: '100vw', }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
        {navItems.map((item, index) => (
          <li key={index} style={listItemStyle} onClick={() => handleItemClick(index)}>
            <a href={item.link} style={{ ...linkStyle, borderBottom: selectedItem === index ? '2px solid #FFFFFF' : linkStyle.borderBottom }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
