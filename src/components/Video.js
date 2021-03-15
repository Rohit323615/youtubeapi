import React from 'react'
import {Grid,Paper,Typography} from '@material-ui/core'

const Video = ({video,onVideoSelect}) => {
{console.log(video)}

    return (
        <div>
           <Grid item xs={12}>
             <Paper style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
                <img style={{margin:'10px'}} src={video.snippet.thumbnails.medium.url} alt=""/>
                <Typography vairant='subtitle 2'><strong>{video.snippet.title}</strong></Typography>
             </Paper>
           </Grid>
        </div>
    )
}

export default Video
