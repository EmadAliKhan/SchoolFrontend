import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTypewriter } from 'react-simple-typewriter';

const Gallery = () => {
  
  const [text] = useTypewriter({
    words: ["No Image Available Yet"],
    loop: true,
  });

  const images = [
    "https://i.dawn.com/primary/2021/06/60b85eac8380a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08o8MM8Kwrtnz2_4-OvgibtS66Ep7f6VhVA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT0rVsGt7dDpnvnUYL4hzQ4HM4J_bre-0kQ&s"
  ];

  return (
    <>
      <Navbar/>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '20px 20px 0 20px' }}>
        <div style={{ width: '50%', paddingBottom: '50px' }}>
          <h1 className='text-primary mt-5' style={{ fontSize: '3em', fontWeight: 'bolder',  borderBottom: '3px solid #ff1010' }}>
            School <span style={{ fontWeight: 'lighter', color: '#ff1010' }}>Gallery</span>
          </h1>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '20px' }}>
        {images.length > 0 ? (
          images.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              style={{ width: '30%', height: 'auto', objectFit: 'cover', margin: '0.5rem' }}
            />
          ))
        ) : (
          <p>{text}</p>
        )}
      </div>

      <Footer/>
    </>
  );
};

export default Gallery;
