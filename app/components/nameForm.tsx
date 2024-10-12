import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const NameForm = () => {
  return <div className='flex flex-col gap-4 sm:flex-row'>
      <Box sx={{ flex: 1 }}>
        <Typography >First Name *</Typography>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'first name', sx: {height: '2.5rem', width: '100%'}}} />
      </Box>
      
      <Box sx={{ flex: 1 }}>
        <Typography>Last Name *</Typography>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'last name', sx: {height: '2.5rem'} }} />
      </Box>
    </div>
};

export default NameForm;