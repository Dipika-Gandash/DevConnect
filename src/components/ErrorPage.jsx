import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default ErrorPage;