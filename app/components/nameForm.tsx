import React, { useContext } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { FormContext } from '../context';

const NameForm = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { formData, errors, handleInputChange} = formContext;

  return <div className='mb-2 flex flex-col gap-2 sm:flex-row sm:gap-4'>
      <Box sx={{ flex: 1 }}>
        <div className='flex justify-between items-center font-1'>
        <Typography style={{color: errors.firstName ? 'red' : 'inherit'}} >First Name *</Typography>
        {/* {formContext?.errors.firstName && <p className="text-red-500 text-sm">{formContext.errors.firstName}</p>} */}
        </div>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'first name', sx: {height: '2.5rem', width: '100%', border: errors.firstName? '.1px solid red' : 'inherit'}}} name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </Box>
      
      <Box sx={{ flex: 1 }}>
      <div className='flex justify-between items-center font-1'>
        <Typography style={{color: errors.lastName ? 'red' : 'inherit'}} >Last Name *</Typography>
        {/* {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>} */}
        </div>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'last name', sx: {height: '2.5rem', border: errors.lastName? '.1px solid red' : 'inherit'} }} name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </Box>
    </div>
};

export default NameForm;