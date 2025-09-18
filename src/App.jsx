import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/student/Home';
import { Routes, Route, useMatch } from 'react-router-dom';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollment from './pages/student/MyEnrollment';
import Player from './pages/student/Player';
import Loading from './Component/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentEnrolled from './pages/educator/StudentEnrolled';
import Navbar from './Component/student/Navbar';

function App() {
  const [count, setCount] = useState(0)

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <>
      <div className='text-default min-h-screen bg-white '>
        {!isEducatorRoute && <Navbar />}
        <Routes>
          <Route path= '/' element={<Home />}/>
          <Route path='/course-list' element={<CoursesList />}/>
          <Route path='/course-list/:input' element={<CoursesList />}/>
          <Route path='/course/:id' element={<CourseDetails />}/>
          <Route path= 'my-enrollments' element= {<MyEnrollment />}/>
          <Route path='/player/:courseId' element={<Player />}/>
          <Route path='/loading/:path' element={<Loading />}/>
          <Route path='/educator' element={<Educator />}>
            <Route path='educator' element={<Dashboard />}/>
            <Route path='add-course' element={<AddCourse />}/>
            <Route path='my-courses' element={<MyCourses />}/>
            <Route path='student-enrolled' element={<StudentEnrolled />}/>
          </Route>
        </Routes>
       
      </div>
      
    </>
  )
}

export default App
