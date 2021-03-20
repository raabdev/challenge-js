import React from 'react'
import Nav from './components/Nav'
import TaskForm from './components/TaskForm'
import List from './components/List'

export default function App() {
  
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <TaskForm />
          <List />
        </div>
      </div>
    </div>
  )
}