import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentAttendence = () => {

const navigate = useNavigate()

    return (
        <>
            <table className="table table-danger table-striped">
                <thead className='text-center'>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>FatherName</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='text-center'>1</td>
                        <td className='text-center'>Emad</td>

                        <td className='text-center'>Rehan</td>
                        <td className='text-center'>8</td>

                        <td className='text-center'>
                            male</td>
                        <td className='text-center'><button className='btn btn-outline-danger ' 
                        onClick={() => navigate("studentAttendence")}>Attendence</button>
                        <button className=' ms-2 btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StudentAttendence
