import React from "react";
const Form = () =>{
    const mainTextStyle = {
      padding: '0px',
      marginTop: '90px',
        fontFamily: 'GE Jarida',
        fontSize: '60px',
        fontWeight: '900',
        lineHeight: '75px',
        letterSpacing: '0em',
        textAlign: 'center',
        color: '#078567',
      };
      const textStyle = {
        
        fontFamily: 'Tajawal-Light',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        marginTop: '20px',
      };
      const containerStyle = {
        padding:0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/pics/bg_contact.png")',
        backgroundPosition: 'center', // Adjust as needed
         // Set a lower z-index
    
      };
    return (
       
        <div
      style={{
        padding:0,
        backgroundImage: 'url("/pics/bg_contact1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={mainTextStyle}>
            تواصل معنا
             </div>
             <div style={textStyle}>
             استخدم النموذج أو تواصل معنا عبر وسائل التواصل الاجتماعي. نحن نتطلع إلى سماع رأيك وتقديم الدعم اللازم

             </div>
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            style={{
              padding: '12px',
              margin: '10px',
              borderRadius: '8px',
              width: '100%',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              textAlign: 'right',
              fontFamily:'Tajawal-Light',
              fontSize:'18px'
            }}

          />
          <input
            type="email"
            name="email"
            placeholder="البريد الشبكي"
            style={{
              padding: '12px',
              margin: '1px',
              borderRadius: '8px',
              width: '100%',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              textAlign: 'right',
              
              fontFamily:'Tajawal-Light',
              fontSize:'18px'
            }}/>
          <input
            type="Phone"
            name="phone"
            placeholder="رقم التواصل"
            style={{
              padding: '12px',
              margin: '10px',
              borderRadius: '8px',
              width: '100%',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              textAlign: 'right',
              fontFamily:'Tajawal-Light',
              fontSize:'18px'
            }}
          />
          <input
            type="Description"
            name="Description"
            placeholder="رسالة التواصل : الكلمة، المعنى، العلاقات الدلالية"
            style={{
              
              padding: '12px',
              borderRadius: '8px',
              width: '100%',
              height:'200px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              textAlign: 'right',
              fontFamily:'Tajawal-Light',
              fontSize:'18px',
              
              
            }}
          />
          <button
            type="submit"
            style={{
        padding: '15px 80px',
        margin:'20px',
        borderRadius: '4px',
        backgroundImage: 'linear-gradient(to bottom, #049C78, #078568)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontFamily:'Tajawal-Regular',
        fontSize:'18px'
      }}>
            إرســـــال
          </button>
        </form>
            </div>
       
    )
}
export default Form;