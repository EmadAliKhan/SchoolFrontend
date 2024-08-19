import { Typography } from '@mui/material'
import React from 'react'

const Notification = () => {
  return (
    <>
      <div className="container">
        <Typography className="text-center fw-bold text-primary" variant="h4">
          NOTIFICATIONS
        </Typography>
      
              <div className="row">
                <div className="col-md-12 text-center border shadow mt-4 p-3">
                  <p>
                    <b>NAME:</b> Emad Ali Khan
                  </p>
                  <p>
                    <b>Email:</b> emadalikhan@gmail.com
                  </p>
                  <p>
                    <b>Message:</b> Your institute is Amazing
                  </p>
                  <p>
                    <b>Phone Number:</b> 0318-6342262
                  </p>
                </div>
                <button className="btn btn-primary">Delete</button>
              </div>
      </div>
    </>
  )
}

export default Notification
