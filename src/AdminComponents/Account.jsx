import React from 'react'

const Account = () => {
  return (
    <>
      <div>
        <h2 className="fw-bolder mb-4 mt-3 text-primary">
          Total No. Of Teachers Account: 
        </h2>
        <div className="container">
          <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100 text-center p-3 border border-2 border-primary">
                  <p>Name: <span className="fw-bold">Emad Ali Khan</span></p>
                  <p>Email: <span className="fw-bold">emadalikhan@gmail.com</span></p>
                  <p>Qualification: <span className="fw-bold">Intermediate</span></p>
                  <p>Joining-Date: <span className="fw-bold">1-2-24</span></p>
                  <button className='btn btn-primary'>Edit Information</button>
                </div>
              </div>       
          </div>
        </div>

      </div>
    </>
  )
}

export default Account
