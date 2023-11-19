import React, { useState } from 'react';

const Quiz = () => {
  const [section, setSection] = useState(1);

  const handleStartQuiz = () => {
    setSection(2);
    // Additional logic or API calls to start the quiz
  };

  const handleNextSection = () => {
    setSection((prevSection) => prevSection + 1);
    // Additional logic or API calls to move to the next section
  };
  const Box = {
    
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    backgroundColor:'#f939f9',
   
  };
  
  return (
    
    <div >
      {section === 1 && (
        <div>
        <div
      style={{
        padding:0,
        backgroundImage: 'url("/pics/bg_quiz.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    
    <div className="overlay-container">
        <div  style={{ backgroundImage: 'url("/pics/vert-01.png")', 
        flex:1,
        width: '100%', 
        height: '100%' , 
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        resize:'contain'
        
         }}>
        
          <h2>Quiz Title</h2>
          <p>Quiz Description</p>
          <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
          </div>
          </div>
    </div>
  )}
  
      {section === 2 && (
        <div style={Box}>
        <div>
          <h2>Question Title</h2>
          <p>Question Description</p>
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button>Answer 4</button>
          <button onClick={handleNextSection}>Next Section</button>
        </div>
        </div>
       
      )}

      {section === 3 && (
        <div>
          <h2>Another Question Title</h2>
          <p>Another Question Description</p>
          <div>
            <button>Answer A</button>
            <button>Answer B</button>
          </div>
          <button onClick={handleNextSection}>Next Section</button>
        </div>
      )}

      {/* Add more sections as needed */}
    </div>
    
  );
};

export default Quiz;