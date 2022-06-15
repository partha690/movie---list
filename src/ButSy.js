import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function ButSy() {
  return (
    
    <Stack direction="row" spacing={2}>
       <Button variant="contained" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="contained" startIcon={<ModeEditIcon />}>
        Edit
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
    
  );
}
