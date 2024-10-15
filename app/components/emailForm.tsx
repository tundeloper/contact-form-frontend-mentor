'use client';
import { Box, TextField, Typography } from "@mui/material";
import { Control, Controller, FieldErrors} from "react-hook-form";
import { FormData } from './form';



const EmailForm: React.FC <{control: Control<FormData>, errors: FieldErrors<FormData>}> = ({control, errors}) => {

    return (
        <div className="mb-4">
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1 '>
                    <Typography component="label" htmlFor="email" gutterBottom>
                        Email Address *
                    </Typography>
                </div>
                <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Enter a valid email address',
                  },
                }}
                render={({ field }) => <Box>
                  <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    name="email"
                    id="email"
                    // label="Email"
                    type="email"
                    // required
                    autoComplete="email"
                    aria-describedby="email-error"
                    error={!!errors.email}
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
                    // value={formData.email}
                    // onChange={handleInputChange}
                />
                {errors.email && <span 
                  id="email-error"
                  role="alert"
                  aria-live="assertive" 
                  className="text-red-500 text-sm">{errors.email.message}</span >}
              </Box>} />
                
            </Box>
        </div>
    );
};

export default EmailForm;