import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-2xl font-semibold mb-4">Page Not Found</p>
    <p className="text-gray-500 mb-8">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Go Back Home
    </Link>
  </div>
  )
}

export default PageNotFound