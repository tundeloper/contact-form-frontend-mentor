import React, { useContext } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { FormContext } from '../context';

const NameForm = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { formData, errors, handleInputChange } = formContext;

    return (
        <div className='mb-2 flex flex-col gap-2 sm:flex-row sm:gap-4'>
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1'>
                    <p style={{fontWeight: 'bolder'}}>
                        First Name *
                    </p>
                </div>
                <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors.firstName ? 'red' : 'grey'
                          },
                          '&:hover fieldset': {
                            borderColor: '#81c784', // Darker color on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#81c784',// change focused color
                          },
                        },
                      }}
                    InputProps={{
                        'aria-label': 'first name',
                        sx: { height: '2.5rem', width: '100%', borderColor: errors.firstName ? 'red' : '#e2f1e7', }
                    }}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </Box>

            <Box sx={{ flex: 1 }}>
                    <Typography style={{fontWeight: 'bolder'}}>
                        Last Name *
                    </Typography>
                <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors.lastName ? 'red' : 'grey'
                          },
                          '&:hover fieldset': {
                            borderColor: '#81c784', // Darker color on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#81c784',// change focused color
                          },
                        },
                      }}
                    InputProps={{
                        'aria-label': 'last name',
                        sx: { height: '2.5rem',}
                    }}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </Box>
        </div>
    );
};

export default NameForm;