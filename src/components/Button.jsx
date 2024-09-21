import React from 'react'

function Button({props}) {
  return (
    <button className='py-2.5 px-6 bg-tertiary hover:bg-opacity-80 duration-200 ease-in-out text-white rounded-sm mt-2 cursor-pointer'>
        {props}
    </button>
  )
}

export default Button
