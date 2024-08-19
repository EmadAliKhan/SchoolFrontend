import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField } from '@mui/material';
const JEAUpdate = () => {

  const[notice,setNotice]= useState('')
  const[noticBy,setNoticeBy]= useState('')
  const[noticeDate,setNoticeDate]= useState('')
  const[bgImage,setBgImage]= useState('')
  
  const CurrentUpdates = async(e)=>{
  e.preventDefault();

  const Updates = {
    notice,
    noticBy,
    noticeDate,
    bgImage
  }
  console.log("JEA Updates",Updates);
  

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
          <h5 className='text-primary' >Let's Give Current Updates To Students and Teachers</h5>
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
          <form onSubmit={CurrentUpdates}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  onChange={(e)=>setNotice(e.target.value)}
                  label="Notice"
                  placeholder="notice"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                                onChange={(e)=>setNoticeDate(e.target.value)}
                  required
                  placeholder="Notice_Date"
                  variant="outlined"
                  fullWidth
                  type='date'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  onChange={(e)=>setNoticeBy(e.target.value)}
                  label="Notice_By"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>            
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e)=>setBgImage(e.target.value)}
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
                  Update
                </button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default JEAUpdate
