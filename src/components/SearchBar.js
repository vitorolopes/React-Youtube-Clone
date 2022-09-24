import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStateContext } from '../contexts/StateContextProvider';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
  const {fetchVideosData} = useStateContext()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search")
    fetchVideosData(`search?part=snippet&q=${searchTerm}`)
    setSearchTerm(" ")
  }

  return (
    <Paper
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: 5,
      }}
      onSubmit={handleSubmit}
    >

    <input
      className='search-bar'
      placeholder='Search...'
      value={searchTerm}
      onChange={(e) => {
          setSearchTerm(e.target.value);
      }}
    />

    <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
      <SearchIcon />
    </IconButton>

    </Paper>
    
  )
}

export default SearchBar
