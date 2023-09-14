import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Video from './Video'


const VideosLista = ({id}) => {
    const [EnlacesVideos, setEnlacesVideos] = useState(null)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=830bd4ba66c0738611021ca14c18faaf`)
        .then((res) => {
            if (res.data.results.length > 3) {
                let array = new Array();
                for (let index = 0; index < 3; index++) {
                    array.push(res.data.results[index])
                }
                setEnlacesVideos(array)
            }else
                setEnlacesVideos(res.data.results);


        }).catch((err) => {
            console.log(err);
        });
    }, [])

  return (
    <div>
      {
        (EnlacesVideos != null)
        ? EnlacesVideos.map((value) => <Video keys={value.key} title={value.name} key={value.id} type={value.type} />)
        : ""
      }
    </div>
  )
}

export default VideosLista
