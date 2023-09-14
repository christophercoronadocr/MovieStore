import axios from "axios";

export const instancia = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&',
    headers: {
        "Accept" : "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzBiZDRiYTY2YzA3Mzg2MTEwMjFjYTE0YzE4ZmFhZiIsInN1YiI6IjY0ZWFkNTg0NDU4MTk5MDEwMDk5MWUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NRGVB2pcG7UueYY2SVXLwJ7YpsWMnG5A-dWF9GmpSeQ"
    }
})

export const instanciaByText = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    headers: {
        "Accept" : "application/json",
    }
})