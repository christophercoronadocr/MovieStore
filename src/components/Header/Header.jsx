import React, { useState } from 'react'

const Header = ({ searchMovies }) => {

  const [Search, setSearch] = useState("")

  const onClickHandler = () => {
    searchMovies(Search)
  }
  return (
    <>
      <div className='h-96 bg-center bg-cover' style={{ backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/79ca3efb-0fdc-4c97-b6b8-afdb11af73ac/CR-es-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg")' }}>
        <div className='h-20 flex items-center justify-center'>
          <h1 className='text-white text-6xl font-bold uppercase shadow-lg'>Cinepolis</h1>
        </div>
        <div className='h-20 flex items-center justify-center'>
          <h1 className='text-white text-3xl'>Welcome to Cinepolis. We´re the best web site to search movies</h1>
        </div>
        <div className='flex h-40 items-center justify-center'>
          <div className='w-1/2 text-right'>
            <input type="text" name="" id="" className='p-4 w-1/3 rounded-md shadow-lg' placeholder='Movie Title' value={Search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className='w-1/2 pl-5'>
            <button type="button" className='w-1/6 rounded-md p-4 font-bold text-white bg-indigo-700 hover:bg-indigo-800 shadow-lg' onClick={onClickHandler}>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
