import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Name" variant="standard" color="warning" style ={{width: '90%'}} />
      <TextField id="standard-basic" label="Email" variant="standard" color="warning" style ={{width: '90%'}}/>
      <TextField
          style ={{width: '90%'}}
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          color="warning"
        />
    </Box>
  );
}

