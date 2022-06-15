import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import ButDy from './ButDy';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


 
  

export default function TextFieldSizes() {
  const [value, setValue] = React.useState(null);
  return (
    <Paper
    elevation={8}
    style={{ margin: "5px 18px 8px 15px"}}
  >
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <h2  style={{ margin: "5px 18px 8px 15px"}}> Movie</h2>
      <h2 style={{ margin: "5px 18px 8px 15px"}}>  Advanced Search</h2>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
      </div>
      <div>


  
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  

        <InputLabel  elevation={8}
    style={{ margin: "-10px 0px -50px 550px"}}
     
       >
          Age
        </InputLabel>
        <NativeSelect elevation={4}
    style={{ margin: "0px 0px 0px 550px",width: '60ch'}} 
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        </div>
        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="20vh"
>

        <ButDy/>
        </Box>
    </Box>
  </Paper>

  );
}

