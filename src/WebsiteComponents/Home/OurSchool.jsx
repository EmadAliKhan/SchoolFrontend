import React from 'react'
import { Link } from 'react-router-dom'

const OurSchool = () => {
  return (
    <>
      {/* <div class="container-fluid mt-5 mb-3">
            <section class="row">
              <div class="col-12 p-0">
                <div>
                    <div class="text-center">
                        <h1 class="fw-bold">Our School</h1>
                    </div>
                </div>
            </div>
            </section>
            </div> */}

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '20px 20px 0 20px' }}>
        <div style={{ width: '50%', paddingBottom: '50px' }}>
          <h1 className='text-primary mt-5' style={{ fontSize: '3.5em', fontWeight: 'bolder', borderBottom: '3px solid #ff1010' }}>
            Our <span style={{ fontWeight: 'lighter', color: '#ff1010' }}>School</span>
          </h1>
        </div>
      </div>

            <div class="container-fluid bg-light">
             
             <section class="row">
          <div class="col-12 col-sm-6">
            <div>
            <div class="mt-3"className="row"
            data-aos="fade-up-right">
              <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg"
              width="100%" height="430px" alt=""/>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-sm-6" data-aos="fade-up-left">
          <div class="mt-3"  >
            <h3 class="fw-bold text-primary">Jamila Educational Academy</h3>
          </div>
          <div class="mt-4 me-4" className="row">
            <p class="p">In the heart of our community, Jamila Educational Academy stands as a bastion of educational excellence, catering to the developmental needs of both preschoolers and primary school students. Our commitment to the Montessori philosophy has set us apart as an institution dedicated to laying the strongest foundations for young minds.At the core of our approach is the belief that every child is a unique individual, and learning should be as well. In our carefully prepared classrooms, children explore, experiment, and engage with specially designed materials that stimulate their curiosity and foster independence. Guided by experienced Montessori educators, students are empowered to take ownership of their learning journey, promoting self-motivation and critical thinking.We understand the crucial role the early years play in shaping a child's future.</p>
           <Link to='/about'><button className='btn btn-primary'>Read More</button></Link>
          </div>
        </div>
        </section>
        
      </div>
    </>
  )
}

export default OurSchool
