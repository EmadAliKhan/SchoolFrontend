import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTypewriter } from 'react-simple-typewriter';

const Update = () => {

  const [text] = useTypewriter({
    words: ["o Update Uptill Now"],
    loop: true,
  });

  return (
    <>
      <Navbar/>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '20px 20px 0 20px' }}>
        <div style={{ width: '50%', paddingBottom: '50px' }}>
          <h1 className='text-primary mt-5' style={{ fontSize: '3.5em', fontWeight: 'bolder', borderBottom: '3px solid #ff1010' }}>
            JEA <span style={{ fontWeight: 'lighter', color: '#ff1010' }}>Updates</span>
          </h1>
        </div>
      </div>

      <div style={{ marginBottom: '50px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src="https://aie.edu.pk/wp-content/uploads/2024/04/Montessori-Education.png" 
          alt="Update" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
        <div style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.653)',
          color: '#fff',
          textAlign: 'center',
          padding: '15px',
        }}>
          <h5 style={{ fontSize: '2.5em', fontWeight: 'bolder',color: "red" }}>Notice:</h5>
          <p style={{ fontSize: '20px', margin: '15px' }}>
            Tomorrow (20 <sup>th</sup> August) will be Holiday Due to The Urs Of Shah Abdul Latif Bhattai ...
          </p>
          
          <p><span className='fw-bold text-danger'>Notice By :</span> Gulnaz Mansoor <span className='fw-bold text-danger'>(Principle of JEA)</span></p>
          <p><span className='fw-bold text-danger'>Notice Date :</span> 19-8-2024</p>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Update;
