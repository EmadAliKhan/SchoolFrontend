import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CreateAccount = () => {
  const theme = useTheme();

  const[teacherName,setTeacherName] = useState('')
  const[teacherQualification,setTeacherQualification] = useState('')
  const[teacherEmail,setTeacherEmail] = useState('')
  const[teacherPassword,setTeacherPassword] = useState('')
  const[teacherJoiningDate,setTeacherJoiningDate] = useState('')
  const[teacherImage,setTeacherImage] = useState('')

  const SubmitTeacherInformation = async(e)=>{
    e.preventDefault();

const Account = {
  teacherName,
  teacherQualification,
  teacherEmail,
  teacherPassword,
  teacherJoiningDate,
  teacherImage
}

console.log("Account Created", Account);

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
          <h5 className='text-primary'>Let's Create New Teacher's Account</h5>
        </div>
      </div>
      <Card
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "20px",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <form onSubmit={SubmitTeacherInformation}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setTeacherName(e.target.value)}
                  label="Teacher Name"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setTeacherQualification(e.target.value)}
                  label="Teacher Qualification"
                  placeholder="Qualification"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  onChange={(e)=>setTeacherEmail(e.target.value)}
                  label="TeacherEmail"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={(e)=>setTeacherPassword(e.target.value)}
                  label="EmailPassword"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  onChange={(e)=>setTeacherJoiningDate(e.target.value)}
                  placeholder="Joining_Date"
                  variant="outlined"
                  fullWidth
                  type='date'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e)=>setTeacherImage(e.target.value)}
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
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default CreateAccount;
