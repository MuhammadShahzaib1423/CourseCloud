import React from 'react'
import Hero from '../../Component/student/Hero'
import Companies from '../../Component/student/Companies'
import CoursesSection from '../../Component/student/CoursesSection'

const Home = () => {
  return (
    <div className='flex  flex-col items-center space-y-7 text-denter'>
  <Hero />  
  <Companies />
  <CoursesSection />
    </div>
  )
}

export default Home
