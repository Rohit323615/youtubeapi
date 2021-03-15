import React from 'react'
import Video from './Video'
import {Grid} from '@material-ui/core'

const Videos = ({videos,onVideoSelect}) => {
  if(!videos) return (<h4>loading</h4>)

    return (
            <Grid container spacing={10}>
           {videos.map((video,id)=>(<Video key={id} video={video}  onVideoSelect={onVideoSelect} />))}
           </Grid>  
    )
}

export default Videos
