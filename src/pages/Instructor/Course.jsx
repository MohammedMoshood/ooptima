import React from 'react'
import CourseData from '../../components/CourseData'

const Course = ({user}) => {
  return (
    <main>
      <CourseData user={user} />
    </main>
  )
}

export default Course