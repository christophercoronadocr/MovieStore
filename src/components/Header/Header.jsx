import React, { useState } from 'react'

const Header = ({searchMovies}) => {

  const [Search, setSearch] = useState("")

  const onClickHandler = () => {
      searchMovies(Search)
  }
  return (
    <div className='flex h-96 items-center justify-center bg-blue-900 bg-center bg-cover' style={{backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/79ca3efb-0fdc-4c97-b6b8-afdb11af73ac/CR-es-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg")'}}>
        <div className='w-1/2 text-right'>
            <input type="text" name="" id="" className='p-4 w-1/3 rounded-md shadow-lg' placeholder='Escriba el titulo de la película' value={Search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className='w-1/2 pl-5'>
            <button type="button" className='w-1/6 rounded-md p-4 font-bold text-white bg-indigo-700 hover:bg-indigo-800 shadow-lg' onClick={onClickHandler}>Buscar</button>
        </div>
    </div>
  )
}

export default Header
