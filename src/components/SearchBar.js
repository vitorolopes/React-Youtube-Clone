import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStateContext } from '../contexts/StateContextProvider';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
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
