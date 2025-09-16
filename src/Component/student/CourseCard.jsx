import React,{useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  return (
    <Link to = {'/course/' + course._id} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg" onClick={() => window.scrollTo(0, 0)}>
          <img src={course.courseThumbnail} className='w-full' alt={course.title} />
          <div className='p-3 text-left'>
            <h3 className='text-xl font-semibold'>{course.courseTitle}</h3>
            <p className='text-gray-500'>{course.educator.name}</p>
            <div className='flex items-center space-x-2'>
              <p>4.5</p>
        <div className='flex'>
          {[...Array(5)].map((_, index) => (
            <span key={index} className= {index < 4 ? 'text-yellow-500 w-3.5 h-3.5' : 'w-3.5 h-3.5text-gray-300'}>
              &#9733;
            </span>
          ))}
          </div>   
          <p className='text-gray-500'>22</p>
          
                   </div>
                   <p className='text-xl font-semibold'>{currency} {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
          </div>

    </Link>
  )
}

export default CourseCard
