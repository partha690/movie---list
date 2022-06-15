import * as React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export default function ButDy() {
  return (
    
    <Stack direction="row" spacing={2} >
       <Button variant="contained" startIcon={<SearchIcon />}>
        Search
      </Button>
      <Button variant="contained" endIcon={<CloseIcon/>}>
        Reatart
      </Button>
    </Stack>
    
  );
}