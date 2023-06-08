import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <div>
      <Link to ='/'>Login Again</Link>
      <Link to='/login' type='submit' className='btn btn-success w-100 m-1'>Login Again </Link>
    </div>
  )
}
