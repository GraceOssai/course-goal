import React, {useState} from 'react'
import Courses from './components/courses/Courses'
import './App.css';
import NewCourse from './components/NewCourse/NewCourse'

const DUMMY_COURSES = [
    {
      id : 'c1',
      title : 'Do all exercises'
    },
    {
      id : 'c2',
      title : 'Finish the course'
    },
    {
      id : 'c3',
      title : 'Build personal projects'
    },
    {
      id : 'c4',
      title : 'Restructure my cv using next'
    },
    {
      id : 'c5',
      title : 'Submit applications'
    },
    {
    id : 'c6',
    title : 'Get a job.'
  }
]

function App() {
  const [courses, setCourses] = useState(DUMMY_COURSES)

  const courseAddHandler = (course) => {
    setCourses((prevCourses) => {
      return [course, ...prevCourses]
    })
  }
  
  return (
    <div className="App">
      <NewCourse onAddCourse={courseAddHandler}/>
      <Courses
      myCourses={courses} 
      />
    </div>
  );
}

export default App;
