import React from 'react'
import './CourseItems.css'

const CourseItems = (props) => {
  return (
    <div className='course_title'>
      <p>{props.title}</p>
    </div>
  )
}

export default CourseItems