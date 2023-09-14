import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Card, CardBody, CardHeader, Tooltip } from '@material-tailwind/react'
import VideosLista from '../components/Videos/VideosLista'
import { FaArrowLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { KEYAPI } from '../assets/js/APIKEY'


const DetailsPage = () => {
  const [Movie, setMovie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?${KEYAPI}`)
      .then((res) => {
        setMovie(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <>
      <div className='flex min-h-screen w-full'>

        <Tooltip content="BACK"
          placement="bottom">
          <div className='h-fit'>
            <Link to={'/'} className='hover:text-gray-500'>
              <IconContext.Provider value={{ className: "text-4xl m-5" }}>
                <FaArrowLeft />
              </IconContext.Provider>
            </Link>
          </div>
        </Tooltip>
        <div className='w-1/3 p-10'>
          <Card className='h-[50rem]'>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="inset-0 m-0 h-full w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: (Movie != null) ? `url("https://image.tmdb.org/t/p/w500/${Movie.poster_path}")` : "" }}>
              <p></p>
            </CardHeader>
          </Card>
        </div>
        <div className='w-2/3 p-10 text-blue-gray-600'>
          {
            (Movie != null)
              ? (
                <>
                  <div className='text-center mb-10'>
                    <p className='text-4xl font-bold'>{Movie.title}</p>
                  </div>
                  <div>
                    <div className='flex justify-between p-10'>
                      <div>
                        <span className='font-bold'>Release date: </span>
                        <span>{Movie.release_date}</span>
                      </div>
                      <div>
                        <p className='text-2xl font-bold'>{Movie.tagline}</p>
                      </div>
                      <div>
                        <span className='font-bold'>Duration: </span>
                        <span>{Movie.runtime} min</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='w-1/3 text-2xl'>
                      <Card>
                        <CardBody>
                          <p className='font-bold mb-5 italic text-blue-gray-600'>Description</p>
                          <p className='text-lg'>
                            {Movie.overview}
                          </p>
                        </CardBody>
                      </Card>
                    </div>
                    <div className='w-2/3'>
                      <VideosLista id={id} />
                    </div>
                  </div>
                </>
              )
              : ""
          }
        </div>
      </div>
    </>
  )
}

export default DetailsPage
