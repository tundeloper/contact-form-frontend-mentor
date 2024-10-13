'use client';
import { Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../context";

const EmailForm = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { formData, errors, handleInputChange } = formContext;

    return (
        <div className="mb-2">
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1'>
                    <Typography style={{fontWeight: 'bold'}}>
                        Email Address *
                    </Typography>
                    {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
                </div>
                <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors.email ? 'red' : 'grey'
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
                        'aria-label': 'email',
                        sx: { height: '2.5rem',}
                    }}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </Box>
        </div>
    );
};

export default EmailForm;