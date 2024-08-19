import React from 'react'


const OurSchool = () => {
  return (
    <>
       {/* <div className="container-fluid mt-4 mb-3">
      <section className="row">
        <div className="col-12 p-0">
          <div>
              <div className="text-center">
                  <h1 className="fw-bold">Our School</h1>
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
      <div className="container bg-light">
        <section className="row">
        <div className="col-12">
          <div>
          <div className="mt-3">
            <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg"
            width="100%" height="400px" alt=""/>
          </div>
        </div>
      </div>
      
      <div className="col-12" data-aos="fade-left">
        <div className="mt-3">
          <h1 className="fw-bold text-primary text-center">Jamila Educational Academy</h1>
        </div>
        <div className="mt-4 me-4" >
          <p className="p text-center">In the heart of our community, Jamila Educational Academy stands as a bastion of educational excellence, catering to the developmental needs of both preschoolers and primary school students. Our commitment to the Montessori philosophy has set us apart as an institution dedicated to laying the strongest foundations for young minds.At the core of our approach is the belief that every child is a unique individual, and learning should be as well. In our carefully prepared classrooms, children explore, experiment, and engage with specially designed materials that stimulate their curiosity and foster independence. Guided by experienced Montessori educators, students are empowered to take ownership of their learning journey, promoting self-motivation and critical thinking.We understand the crucial role the early years play in shaping a child's future. Our Montessori program ensures that children are well-prepared to transition seamlessly into our primary school program. Here, we build upon the Montessori foundation, offering a broader curriculum while retaining our student-centered approach.Our dedicated team of educators goes beyond traditional teaching. They are mentors who inspire creativity, nurture curiosity, and instill a love for learning. With our low student-to-teacher ratio, personalized attention ensures that each child's unique strengths and challenges are addressed.In a rapidly changing world, we remain dedicated to our mission of providing a strong foundation. Through Montessori and primary school programs, passionate educators, and a holistic approach, Jamila Educational Academy is where young minds find their potential, dreams are nurtured, and the leaders of tomorrow begin their journey.</p>

        </div>
      </div>
      </section>
    </div>
    
    </>
  )
}

export default OurSchool
