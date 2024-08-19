import React from 'react'
const Curosel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://aie.edu.pk/wp-content/uploads/2024/04/Montessori-Education.png" class="d-block w-100" height="500px" alt="..."/>
          <div class="carousel-caption">
              <h5 class="text-primary fs-1 fw-bolder">Jamila Educational Academy</h5>
              <p class="fs-5 pt-3">"Discover a dynamic learning community where you can explore personalized opportunities for growth, engage in innovative curriculum, and empower yourself for a successful future filled with achievements and lifelong learning."</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://aie.edu.pk/wp-content/uploads/2024/04/Montessori-Education.png" class="d-block w-100" height="500px" alt="..."/>
          <div class="carousel-caption">
              <h5 class="text-primary fs-1 fw-bolder">Jamila Educational Academy</h5>
              <p class="fs-5 pt-3">"Discover a dynamic learning community where you can explore personalized opportunities for growth, engage in innovative curriculum, and empower yourself for a successful future filled with achievements and lifelong learning."</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.americamagazine.org/sites/default/files/styles/article_large_header_image/public/main_image/montessori-1.jpg?itok=akFfjRb2" class="d-block w-100" height="500px" alt="..."/>
          <div class="carousel-caption">
              <h5 class="text-primary fs-1 fw-bolder">Jamila Educational Academy</h5>
              <p class="fs-5 pt-3">"Discover a dynamic learning community where you can explore personalized opportunities for growth, engage in innovative curriculum, and empower yourself for a successful future filled with achievements and lifelong learning."</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default Curosel
