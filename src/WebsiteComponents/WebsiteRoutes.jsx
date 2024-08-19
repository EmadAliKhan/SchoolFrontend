import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Gallery from './Gallery'
import Home from './Home/Home'
import About from './About/About'
import AdminForm from './AdminForm'
import AdminPortal from '../AdminComponents/AdminPortal'
import Update from './Update'
import TeacherPortal from '../TeacherComponents/TeacherPortal'
import TeacherForm from './TeacherForm'

const WebsiteRoutes = () => {
  return (
    <>
    
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/admin' element={<AdminForm/>}/>
        <Route path='/adminPortal/*' element={<AdminPortal/>}/>
        <Route path='/teacher' element={<TeacherForm/>}/>
        <Route path='/teacherPortal/*' element={<TeacherPortal/>}/>
      </Routes>
    </>
  )
}

export default WebsiteRoutes
