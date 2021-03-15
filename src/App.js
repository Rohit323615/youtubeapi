import {Grid} from '@material-ui/core'
import {useState} from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import Videos from './components/Videos'
import VideoDetail from './components/VideoDetail'

const App = () => {
 const [videos,setVideos]=useState([])
  const [selectedVideo,setSelecetedVideo]=useState('')

const onVideoSelect = (video)=>{
  setSelecetedVideo(video)
}


  const getData= async (item)=>{
    const res=await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCLu7uenisiMYJk3AgCojsJxIK0XBDprLU',
        q:item
      }
    })
    console.log(res)
    setVideos(res.data.items)
    setSelecetedVideo(res.data.items[0])
// console.log(videos)
 ///// console.log(selectedVideo)

  }
  

  return (
    <div>
      <Grid container justify='center' spacing={10}>
        <Grid item xs={12}>
             <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar getData={getData}/>
                  </Grid>
                <Grid item xs={7}>
                  <VideoDetail selectedVideo={selectedVideo}/>
                  </Grid>
                <Grid item xs={5}>
                  <Videos  videos={videos} onVideoSelect={onVideoSelect} />
                  </Grid>
             </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
