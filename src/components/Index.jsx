import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'

const Index = () => {
  return (
    <div className='dashboard'>
      <div className='sidebar'>
        <h1>DASHBOARD</h1>
      <div className='links'>
        <Link to="/">
          Dashboard
        </Link>

        <Link to="/std">
          Student list
        </Link>

        <Link to="/user">
          User List
        </Link>
      </div>
      </div>

      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Index