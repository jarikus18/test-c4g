import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="root">
      <h1 className="text">404</h1>
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  )
}
export default NotFound
