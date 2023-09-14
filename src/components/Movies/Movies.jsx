import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import MovieCard from './MovieCard';

const Movies = ({MovieList}) => {

  return (
    <>
      {
        (MovieList == null)
          ? ""
          : 
            MovieList.map((Movie, index) => <MovieCard Movie={Movie} key={index}/>)
      }
    </>

  )
}

export default Movies
