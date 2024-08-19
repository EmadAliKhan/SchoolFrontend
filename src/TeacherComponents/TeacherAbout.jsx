import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';


const TeacherAbout = () => {
  return (
    <>
      <Stack className='d-flex justify-content-center align-items-center'>
      <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzKngKTe0LsQY81ISNZ4eJ_YN6ro6K_63nsNal3ybnUudcjW-WiLzjaOvLwf079HZPHA&usqp=CAU" />


      </Stack>

<div className='d-flex flex-column align-items-center mt-3'>
<Typography variant="h6" >
   Name : <span className='fw-bold'>Emad Ali Khan</span>
</Typography>
<Typography variant="h6">
   Qualification : <span className='fw-bold'>Graduation</span>
</Typography>
<Typography variant="h6">
   Email : <span className='fw-bold'>emadalikhan5@gmail.com</span>
</Typography>
<Typography variant="h6">
   Joining Date : <span className='fw-bold'>2-6-2024</span>
</Typography>
<Typography variant="h6">
   Current Status : <span className='fw-bold'>Teacher</span>
</Typography>
<Typography variant="h5" className='fw-bold mt-3'>
   <u>Teacher Attendence</u>
</Typography>
</div>


<table className="table table-bordered mt-2">
          <thead className='text-center'>
            <tr>
              <th>S.No</th>
              <th>Attendence Status</th>
              <th>Attendence Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>Present</td>
              <td className='text-center'>4-5-24</td>
            </tr>
          </tbody>
           
        </table>



    </>
  )
}

export default TeacherAbout
