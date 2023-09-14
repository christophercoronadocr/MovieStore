import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import DetailsPage from '../Pages/DetailsPage';
import { instancia, instanciaByText } from '../assets/js/ConfigAxios';
import { KEYAPI } from '../assets/js/APIKEY';


const Routing = () => {

  const [MovieList, setMovieList] = useState(null)

  useEffect(() => {
    
    instancia.get("page=1").then((res) => {
      setMovieList(res.data.results)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  const searchMovies = (nameMovie) => {
    instanciaByText.get(`/movie?${KEYAPI}&query=${nameMovie}`).then((res) => {
      setMovieList(res.data.results)
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <Router>
      <Switch>
        <Route path={'/details/:id'}>
            <DetailsPage />
        </Route>
        <Route path={'/'}>
            <HomePage MovieList={MovieList} searchMovies={searchMovies} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
