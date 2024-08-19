import React, { useState } from 'react'
import { Card, CardContent, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const AddStudent = () => {

  const[studentName,setStudentName]= useState('')
  const[fatherName,setFatherName]= useState('')
  const[schoolName,setSchoolName]= useState('')
  const[studentClass,setStudentClass]= useState('')
  const[attendingDate,setAttendingDate]= useState('')
  const[studentGender,setStudentGender]= useState('')


const studentDetail = async(e)=>{
  e.preventDefault();

  const Student = {
    studentName,
    fatherName,
    schoolName,
    studentClass,
    attendingDate,
    studentGender
  }

  console.log("Student Detail", Student);
}

  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center text-danger'>
        <div className='d-flex align-items-center '>
          <h1 className='fw-bold'>
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
          <h5>Let's Add New Students</h5>
        </div>
      </div>
      <Card
      className='border border-2 border-danger'
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "20px",
        //   border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <form onSubmit={studentDetail}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setStudentName(e.target.value)}
                  label="Student Name"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setFatherName(e.target.value)}
                  label="Father Name"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setSchoolName(e.target.value)}
                  label="School Name"
                  placeholder="School"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setStudentClass(e.target.value)}
                  label="Student Class"
                  placeholder="class"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setAttendingDate(e.target.value)}
                  placeholder="Date"
                  variant="outlined"
                  fullWidth
                  type='date'
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setStudentGender(e.target.value)}
                     label="Gender"
                  placeholder="gender"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button className="btn btn-danger px-5" type="submit">
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default AddStudent
