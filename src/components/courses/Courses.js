import React from 'react'
import './Courses.css'
import CourseItems from './CourseItems'

const Courses = (props) => {
  return (
    <div className='course-container'>
      {props.myCourses.map((course) => 
      <CourseItems
      key={course.id} 
      title={course.title}
      />)}
    </div>
  )
}

export default Courses