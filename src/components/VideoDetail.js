import React from 'react'
import {Paper,Typography} from '@material-ui/core'

const VideoDetail = ({selectedVideo}) => {
if(!selectedVideo) return (
    <p>Loading...</p>
)

//{console.log(selectedVideo)}
const videosrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
        <div>
            <Paper elevation={6} style={{height:'200px'}}>
       <iframe frameborder="0" width='100%' height='100%' title='video player' src={videosrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{padding:'10px'}}>
                <Typography variant='h4'>{selectedVideo.snippet.title}-{selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant='subtitle 2'>{selectedVideo.snippet.description}</Typography>
            </Paper>
        </div>
    )
}

export default VideoDetail
