import Header from "../components/Header/Header"
import Movies from "../components/Movies/Movies"


const HomePage = ({MovieList, searchMovies}) => {
  return (
    <div className="min-h-screen">
      <Header searchMovies={searchMovies} />
      <div className="grid mx-40 grid-cols-4 mb-8">
        <Movies MovieList={MovieList}  />
      </div>
    </div>
  )
}

export default HomePage
