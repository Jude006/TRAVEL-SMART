import React from 'react'

function Search() {
  return (
    <div className='font-mont absolute right-10 top-28 h-screen bg-red-500'>
      <input type="text" className='py-3 px-6 bg-tertiary border-none focus:outline-none  bg-opacity-25'placeholder='Seach e.g uk'/>
    </div>
  )
}

export default Search
