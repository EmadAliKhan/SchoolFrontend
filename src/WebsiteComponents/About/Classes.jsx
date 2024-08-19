import React from 'react'

const Classes = () => {
  return (
    <>
      {/* <div class="container">
          <section class="row">
            <div class="col-12">
              <div class="mt-5 mb-3">
                <h1 class="text-center fw-bold">Classes Of Our School</h1>
              </div>
            </div>
</section>
</div>         */}
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '20px 20px 0 20px' }}>
        <div style={{ width: '50%', paddingBottom: '50px' }}>
          <h1 className='text-primary mt-5' style={{ fontSize: '3.5em', fontWeight: 'bolder', borderBottom: '3px solid #ff1010' }}>
            Classes Of Our<span style={{ fontWeight: 'lighter', color: '#ff1010' }}> School</span>
          </h1>
        </div>
      </div>
<div class="bg-light">
              <div class="container">
                <section class="row">
            {/* <!-- Montessori starts --> */}
            <div class="col-12 col-sm-6 col-md-3 mt-4 mb-3" data-aos="fade-right">
              <div class="container-image">
                <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="150px" alt=""/>
                <div class="overlay">
                  
                    <h5 class="text-center text-white">Activity Room</h5>
                  
                </div>
              </div>

            </div>
            {/* <!-- Montessori ends --> */}

            {/* <!-- Nursery starts --> */}
            <div class="col-12 col-sm-6 col-md-3 mt-4 mb-3" data-aos="fade-down">

              <div class="container-image">
                <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="150px" alt=""/>
                <div class="overlay">
                  
                    <h5 class="text-center text-white">Montessori</h5>
                  
                </div>
              </div>

            </div>
            {/* <!-- Nursery ends --> */}

            {/* <!-- KG-1 starts --> */}
            <div class="col-12 col-sm-6 col-md-3 mt-4 mb-3">
              <div class="container-image" data-aos="fade-up">
                <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="150px" alt=""/>
                <div class="overlay">
                  
                    <h5 class="text-center text-white">Nursery</h5>
                  
                </div>
              </div>

            </div>
            {/* <!-- KG-1 ends --> */}

            {/* <!-- KG-1 starts --> */}
            <div class="col-12 col-sm-6 col-md-3 mt-4 mb-3">

              <div class="container-image" data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
                <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="150px" alt=""/>
                <div class="overlay">
                  
                    <h5 class="text-center text-white">KG-1</h5>                  
                </div>
              </div>

            </div>
            {/* <!-- KG-1 ends --> */}
          </section>
        </div>
        
          <div className='d-flex justify-content-center text-align-center'>
            <div className='col-12 col-sm-6 col-md-3'>
                <div class="container-image" data-aos="fade-up">
              <img src="https://avatarms.com/wp-content/uploads/maxresdefault-2-1030x579.jpg" width="100%" height="150px" alt=""/>
              <div class="overlay">                 
                  <h5 class="text-center text-white">KG-2</h5>                  
              </div>
            </div>
            </div>
          </div>
                    {/* <!-- KG-2 ends -->/ */}
                  </div> 
    </>
  )
}

export default Classes
