'use client'
import { Box, TextField, Typography } from "@mui/material"
import { useContext } from "react";
import { FormContext } from "../context";

const EmailForm = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { formData, errors, handleInputChange, validateForm, resetForm } = formContext;
    return <div className="mb-2">
        <Box sx={{ flex: 1 }}>
        <div className='flex justify-between items-center font-1'>
        <Typography style={{color: errors.email ? 'red' : 'inherit'}} >Email Address *</Typography>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'first name', sx: {height: '2.5rem', border: errors.email? '.1px solid red' : 'inherit'}}} name="email" value={formData.email} onChange={handleInputChange} />
      </Box>
    </div>
}

export default EmailForm