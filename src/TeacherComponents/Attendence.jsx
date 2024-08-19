import { Autocomplete, Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'


const Attendence = () => {

  const[studentClass,setstudentClass]= useState('')
  const[attendence,setAttendence]= useState('')
  const[attendeceDate,setAttendenceDate]= useState('')

const StudentAttendence = async(e)=>{
  e.preventDefault("")

  const StudentStatus = {
    studentClass,
    attendence,
    attendeceDate
  }

  console.log("Current Attendence", StudentStatus);
  
}

  return (
    <div>
    <h1 className="d-flex justify-content-center fw-bold"><span className='text-danger'>Student Name</span> : Emad Khan </h1>
    <Card
      style={{
        maxWidth: 450,
        maxHeight: 470,
        margin: "0 auto",
        padding: "10px 5px",
        border: "2px solid red",
      }}
    >
      <CardContent>
        <form onSubmit={setAttendenceDate}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
            <TextField
                // value={title}
                label="StudentClass"
                onChange={(e) => setstudentClass(e.target.value)}
                placeholder="Class"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
                <Autocomplete
                style={{padding: "10px 0 10px 5px"}}
                  onChange={(event, value) => setAttendence(value)}
                  options={[
                    "Present",
                    "Absent"
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Attendence Status"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

            <Grid xs={12} item>
              <TextField
                // value={price}
                type="date"
                onChange={(e) => setAttendenceDate(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid
              xs={12}
              marginTop={1}
              item
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn btn-danger px-5" type="submit" >
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}

export default Attendence
