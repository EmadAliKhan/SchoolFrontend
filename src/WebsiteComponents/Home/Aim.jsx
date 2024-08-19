import React from 'react';
import { Link } from 'react-router-dom';

const Aim = () => {
  return (
    <>
      <div className="container">
        <section className="row mt-5">
            {/* 1 */}
          <div className="col-12 col-sm-6 col-md-4 " style={{background: "green"}}>
           <div className="row"
            data-aos="fade-up-right">
           <div className="ms-2 text-white">
              <h2 className="fw-bold mt-4">What is</h2>
              <h1 className="fw-bold">OUR SCHOOL?</h1>
              <p className="mt-4">At Our School, we are dedicated to providing an exceptional learning experience that nurtures the growth and development of every child. With a strong commitment to education, we offer:</p>
            </div>
            <hr />
            <div className="fw-bold fs-5 ms-2 text-white">
              <p><i className="fa-solid fa-face-grin-wink"></i> RESEARCH THAT BENEFIT CHILDREN</p>
              <hr />
              <p><i className="fa-solid fa-face-grin-wink"></i> PROGRAMS FOR EDUCATORS</p>
              <hr />
              <p><i className="fa-solid fa-face-grin-wink"></i> DYNAMIC CLASSROOMS</p>
              <hr />
            </div>
            <Link to="/about">
              <button className="btn bg-white text-success fw-bold">READ MORE</button>
            </Link>
           </div>
          </div>

{/* 2 */}
          <div className="col-12 col-sm-6 col-md-4 " style={{background: "orange"}}>
            <div className="row"
            data-aos="fade-up">
            <div className="ms-2 text-white">
              <h2 className="fw-bold mt-4">OUR</h2>
              <h1 className="fw-bold">IMPACT</h1>
              <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="250px" alt="" />
              <p className="mt-4 p">At Our Impact, we are committed to making a meaningful difference in the lives of individuals and communities. Through our dedicated efforts and initiatives, we strive to:</p>
            </div>
            <Link to="/about">
              <button className="btn bg-white fw-bold mb-3" style={{color: "orange"}}>READ MORE</button>
            </Link>
            </div>
          </div>

{/* 3 */}
          <div className="col-12 col-sm-6 col-md-4 bg-danger">
            <div className="row"
            data-aos="fade-up-left">
            <div className="ms-2 text-white">
              <h2 className="fw-bold mt-4">GET</h2>
              <h1 className="fw-bold">INVOLVED</h1>
            </div>
            <hr />
            <div className="text-white">
              <p className="fw-bold "><i className="fa-solid fa-face-grin-wink"></i> WORKING AT OUR SCHOOL</p>
              <p>Join our dedicated team of educators and make a lasting impact on the lives of students. Discover fulfilling career opportunities and help shape the future of education.</p>
            </div>
            <hr />
            <div className="text-white">
              <p className="fw-bold"><i className="fa-solid fa-face-grin-wink"></i> VOLUNTEER YOUR TIME</p>
              <p className="p">Give back to your community by volunteering your time and expertise. We welcome passionate individuals who want to contribute to our educational mission through volunteering.</p>
            </div>
            <Link to="/about">
              <button className="btn bg-white text-danger fw-bold mb-3">READ MORE</button>
            </Link>
            </div>
          </div>
        </section>
      </div>

      




      {/* school Mission start */}

      <div className="container-fluid">
          <section className="row">
              <div className="col-12 mt-5">
                  <div className="MissionImg">
                      <img src="https://www.sciencefriday.com/wp-content/uploads/2018/03/shutterstock_1017761377-min.jpg" width="100%" height="230px" alt=""/>
                      <div className="text-overlay" data-aos="fade-top">
                          <p className='h5'>School Mission</p>
                          <h2 className="fw-bold">"To prepare for the success in this world and hereafter by providing quality education"</h2>
                      </div>
                  </div>
              </div>
          </section>
      </div>

      {/* school Mission end */}

    </>
  );
};

export default Aim;
