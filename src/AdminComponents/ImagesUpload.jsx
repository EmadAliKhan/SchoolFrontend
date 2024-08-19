import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField } from '@mui/material';
const ImagesUpload = () => {

const[EventName,setEventName] = useState('')
const[EventImage,setEventImage] = useState('')

const EventDetail = async(e)=>{
  e.preventDefault();

  const Event = {
    EventName,
    EventImage
  }

  console.log("Image Created",Event);
  
}


  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex align-items-center'>
        <h1 className='fw-bold text-primary'>
          Welcome! 
          <img 
            src="https://i.pinimg.com/474x/21/f2/07/21f2078d23f9195570a3711c018328b2.jpg" 
            height="80" 
            alt="Hand" 
            className='pb-3' 
          />
        </h1>
      </div>
      <div>
        <h5 className='text-primary'>Let's Upload Images on Gallery</h5>
      </div>
    </div>
    <Card
    className='border border-2 border-primary'
      style={{
        maxWidth: 450,
        margin: "0 auto",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <form onSubmit={EventDetail}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <TextField
                required
                onChange={(e)=>setEventName(e.target.value)}
                label="Event_Name"
                placeholder="name"
                variant="outlined"
                fullWidth
              />
            </Grid>          
           
            <Grid item xs={12}>
              <TextField
                required
                onChange={(e)=>setEventImage(e.target.value)}
                type="file"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn btn-primary px-5" type="submit">
                Upload
              </button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  </>
  )
}

export default ImagesUpload
