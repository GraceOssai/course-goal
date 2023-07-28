import React, { useState } from 'react'
import './NewCourseForm.css'

const NewCourseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const userData = {
      title: enteredTitle
    }

    props.onSubmitForm(userData)

    setEnteredTitle('');
  }
  return (
      <form className='course-form' onSubmit={submitHandler}>
        <label>Course title</label>
        <input type="text" 
        onChange={titleChangeHandler}
        value={enteredTitle}
        />
        <button>Add Course</button>
      </form>
    
  )
}

export default NewCourseForm