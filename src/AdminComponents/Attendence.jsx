import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const Attendence = () => {
  return (
    <>
      
      <h1 className='text-center fw-bold text-primary'>Teacher Attendence</h1><hr />
      <div>
        <table className="table table-striped">
          <thead className='text-center'>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Id</th>
              <th>Joining_Date</th>
              <th>Absents</th>
              <th>Presents</th>
              <th>Leave</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>Emad Ali Khan</td>
              
              <td className='text-center'>emad@teacher.jea.pk</td>
              <td className='text-center'>1-2-24</td>
              <td className='text-center'>5</td>
              
              <td className='text-center'> 10 </td>
<td className='text-center'>4</td>
            </tr>
          </tbody>
           
        </table>
        
      </div>



      <h1 className='text-center fw-bold text-primary'>Student Attendence</h1><hr />
      <div>
        <table className="table table-striped">
          <thead className='text-center'>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Joining_Date</th>
              <th>Absents</th>
              <th>Presents</th>
              <th>Leave</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>Emad Ali Khan</td>
              <td className='text-center'>1-2-24</td>
              <td className='text-center'>5</td>             
              <td className='text-center'> 10 </td>
<td className='text-center'>4</td>
            </tr>
          </tbody>
           
        </table>
        
      </div>
    </>
  )
}

export default Attendence
