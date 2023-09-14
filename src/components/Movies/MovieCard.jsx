import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FaPlay, FaStarHalfAlt, FaStar } from 'react-icons/fa'
import Genres from '../Genres/Genres';
import { Link } from 'react-router-dom/cjs/react-router-dom';



const MovieCard = ({ Movie }) => {
    return (
        <Card className="max-w-[20rem] overflow-hidden mr-7 mt-10">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img className='min-h-[480px]'
                    src={(Movie.poster_path != null) ? `https://image.tmdb.org/t/p/w500/${Movie.poster_path}` : "https://d29fhpw069ctt2.cloudfront.net/photo/6569/preview/86520cc7-f141-4768-8e5c-8d26d273e0ec_1280x1280.jpg"}
                    alt="ui/ux review check"
                />

            </CardHeader>
            <div className='relative h-10 w-full'>
                <Link to={"/details/"+Movie.id}>
                    <div className='absolute right-0 -top-6 bg-red-500 p-6 rounded-full text-white hover:bg-red-600 cursor-pointer'>
                        <FaPlay />
                    </div>
                </Link>
            </div>
            <CardBody>

                <div className='flex text-xs items-center justify-between'>
                    <div>
                        <div>
                            {
                                (Movie.vote_average > 7)
                                    ? <span><FaStar className='inline-block text-yellow-700' /> {Movie.vote_average + "/10"}</span>
                                    : <span><FaStarHalfAlt className='inline-block text-yellow-700' /> {Movie.vote_average + "/10"}</span>
                            }
                        </div>
                        <div className='font-bold'>release date</div>
                        <div>{Movie.release_date}</div>
                    </div>
                    <div className='w-1/2 text-right'>
                        <div className='font-bold'>Genres</div>
                        <div><Genres idMovie={Movie.id} /></div>
                    </div>
                </div>
                <Typography variant="h6" color="blue-gray">
                    {Movie.original_title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 text-sm">
                    {Movie.overview}
                </Typography>
            </CardBody>
        </Card>
    )
}

export default MovieCard
