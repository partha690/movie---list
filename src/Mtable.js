import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import ButSy from '../src/ButSy';
import Chip from '@mui/material/Chip';


const columns = [
  { field: 'Title', headerName: 'Title', width: 170 },
  { field: 'Description', headerName: 'Description', width: 170 },
  { field: 'ReleaseYear', headerName: 'ReleaseYear', width: 160 },
  { field: 'Language', headerName: 'Language', width: 170 },
  { field: 'Director', headerName: 'Director', width: 160 },
  { field: 'Ratting', headerName: 'Ratting', width: 170},
  { field: 'Special Feature', headerName: 'Special Feature', width: 160 },


];

const rows = [
  { id: 1, Title:'Charlies Angels',  Description: 'Movie', ReleaseYear: '2009', Language: 'English',Director:'Aman',Ratting:'dr','Special Feature':'ji' },
  { id: 2, Title:'Charlies Angels', Description: 'Movie', ReleaseYear: '2009',Language: 'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
  { id: 3, Title:'Charlies Angels' ,Description: 'Movie', ReleaseYear: '2009', Language: 'English',Director:'Aman' ,Ratting:'dr','Special Feature':'ji'},
  { id: 4, Title:'Charlies Angels', Description: 'Movie', ReleaseYear: '2009', Language: 'English',Director:'Aman',Ratting:'dr','Special Feature':'ji' },
  { id: 5, Title:'Charlies Angels' ,Description: 'Movie', ReleaseYear: '2009', Language: 'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
  { id: 6, Title:'Charlies Angels' ,Description: 'Movie', ReleaseYear: '2009', Language: 'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
  { id: 7, Title:'Charlies Angels', Description: 'Movie', ReleaseYear: '2009', Language: 'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
  { id: 8, Title:'Charlies Angels' ,Description: 'Movie', ReleaseYear: '2009', Language: 'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
  { id: 9, Title:'Charlies Angels' ,Description: 'Movie', ReleaseYear: '2009', Language:'English' ,Director:'Aman',Ratting:'dr','Special Feature':'ji'},
];

export default function MTable() {
  return (
    
    <Paper
    elevation={8}
    style={{ margin: "5px 18px 8px 15px"}}
  >
    <div style={{ height: 500, width: '100%' }}>
    <h2 style={{ margin: "5px 25px 8px 25px"}}>  Details</h2>
   
       <ButSy />
       <h2></h2>


    
      <DataGrid
     
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    
    
    </div>
    </Paper>
  );
}
