import axios from "axios";

export const instancia = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&',
    headers: {
        "Accept" : "application/json",
        "Authorization" : "Token TMDB"
    }
})

export const instanciaByText = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    headers: {
        "Accept" : "application/json",
    }
})