import React, { useState, useEffect } from 'react'
import Genre from './Genre'
import axios from 'axios'

const Genres = ({idMovie}) => {
    const [Gens, setGens] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=830bd4ba66c0738611021ca14c18faaf`)
        .then((res) => {
            setGens(res.data.genres);
        }).catch((err) => {
            console.log(err);
        });
        
    }, [])

  return (
    <p className='text-xs'>
      {
        (Gens == null)
        ? ""
        : Gens.map((value, index) => <Genre value={value} key={index} />)
      }
    </p>   
  )
}

export default Genres
