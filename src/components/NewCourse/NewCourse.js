import React from 'react'
import NewCourseForm from './NewCourseForm'
import './NewCourse.css'

const NewCourse = (props) => {

  
  const submitFormHandler = (userEnteredData) =>{
    const userData = {
      ...userEnteredData,
      id : Math.random().toString()
    }
    props.onAddCourse(userData)
  }
  return (
    <div className='Newcourse__container'>
      <NewCourseForm onSubmitForm={submitFormHandler}/>
    </div>
  )
}

export default NewCourse