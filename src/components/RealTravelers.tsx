import React from 'react';

const TravelerBenefits = () => {
  return (
    <div 
      style={{
        marginTop:'50px',
        backgroundColor: '#8a00c2', 
        font:'Urbanist',
        color: 'white', 
        padding: '3rem 1rem', 
        borderRadius: '16px', 
        position: 'relative',
        maxWidth: '1200px', 
        margin: '0 auto'
      }}
    >
      <div style={{ textAlign: 'left', lineHeight: '1.5'}}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold',marginLeft:'2rem'}}>
          Only Real<br />Travelers can<br />guide you...
        </h2>
        <p style={{ fontSize: '1.125rem', marginTop: '1rem',marginLeft:'2rem' }}>
          Only people who’ve actually been there<br />
          can help you plan better, smarter, and<br />
          stress-free.
        </p>
      </div>

      <div 
        style={{
          position: 'absolute', 
          top: '20px', 
          right: '30px', 
          fontSize: '24px', 
          opacity: '0.7'
        }}
      >
        💎
      </div>
    </div>
  );
};

export default TravelerBenefits;
