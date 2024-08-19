import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

const TeacherAttendence = () => {

const [attendence,setAttendence] = useState("")

  return (
    <>
      <h1 className='text-center fw-bold text-primary'>Teacher Attendence</h1><hr />
      <div>
        <h2 className="fw-bolder mb-4 mt-3 text-primary">
          Total No. Of Teachers: 
        </h2>
        <table className="table table-striped">
          <thead className='text-center '>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Id</th>
              <th>Date</th>
              <th>Attendence</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>Emad Ali Khan</td>
              
              <td className='text-center'>emad@teacher.jea.pk</td>
              {/* <td className='text-center'>1-2-24</td> */}
              <TextField
                  required
                  type='date'
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />

              
              <td className='text-center'>
                <Autocomplete
                  placeholder="Attendence"
                  options={[
                    "Present",
                    "Absent",
                    "Leave"
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Present"
                      variant="outlined"
                    />
                  )}
                  onChange={(event, value) => setAttendence(value)}
                /></td>
<td className='text-center'><button className='btn btn-danger'>Delete</button></td>
            </tr>
          </tbody>
           
        </table>
        
        <div class="d-flex justify-content-center align-items-center">
    <button class="btn btn-primary rounded-circle p-3 fw-bold">Submit</button>
  </div>
      </div>
    </>
  )
}

export default TeacherAttendence
