import React from 'react'

function Dropdown() {
  return (
    <div className="w-48 bg-white shadow-lg rounded-xl p-3 space-y-2 select-none">
  <button className="block w-full text-left font-semibold text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md">
    Sign up
  </button>

  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md">
    Log in
  </button>

  <div className="border-t my-2"></div>

  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md">
    Airbnb your home
  </button>

  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md">
    Help centre
  </button>
</div>
  )
}

export default Dropdown
