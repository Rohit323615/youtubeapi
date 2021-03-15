import {useState}from 'react'
import {Paper,TextField} from '@material-ui/core'

const SearchBar = ({getData}) => {

  const [Item,setItem]=useState('')


  const textChange=(e)=>{
     // console.log(e.target.value)
      setItem(e.target.value)
  }

  const getItem=(e)=>{
      e.preventDefault()
      getData(Item)
  }

    return (
        <div>
            <form style={{padding:'20px'}}  onSubmit={getItem}>
            <Paper elevation={6} >
                <TextField  fullWidth label='type here' value={Item} onChange={textChange}/>
            </Paper>
            </form>
        </div>
    )
}

export default SearchBar
