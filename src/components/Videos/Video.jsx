import React from 'react'

const Video = ({ keys, title, type }) => {
    return (
        <div className='mb-5 inline-block'>
            <p className='font-bold'>{type}: {title}</p>
            <iframe width="360" height="215"
                src={`https://www.youtube.com/embed/${keys}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className='inline-block mr-5'></iframe>
        </div>
    )
}

export default Video
