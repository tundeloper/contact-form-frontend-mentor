import { Box, TextField, Typography } from '@mui/material';
import { Control, Controller, FieldErrors} from 'react-hook-form';
import { FormData } from './form';

const NameForm: React.FC <{control: Control<FormData>, errors: FieldErrors<FormData>}> = ({control, errors}) => {
  

    return (
        <div className='mb-4 flex flex-col gap-4 sm:flex-row sm:gap-4'>
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1'>
                    <Typography component="label" htmlFor='firstName' gutterBottom>First Name *</Typography>
                </div>
                <Controller
                name="firstName"
                control={control}
                defaultValue=''
                rules={{ required: 'This field is required',  minLength: { value: 3, message: 'First name is too short' } }}
                render={({field}) => <Box>
                  <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    required
                    // label="First Name"
                    id='firstName'
                    aria-describedby="firstName-error"
                    error={!!errors.firstName}
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
                    // value={formData.firstName}
                    // onChange={handleInputChange}
                />
                {errors.firstName && <span id="firstName-error" role="alert" aria-live="assertive" className="text-red-500 text-sm">{errors.firstName.message}</span>}
                </Box>} />
                
            </Box>

            <Box sx={{ flex: 1 }}>
              <div className='flex justify-between items-center font-1'>
                    <Typography component='label' htmlFor='lastName' gutterBottom>
                        Last Name *
                    </Typography>
              </div>
              <Controller
                name="lastName"
                control={control}
                defaultValue=''
                rules={{ required: 'This field is required',  minLength: { value: 3, message: 'Last name is too short' } }}
                render={({field}) => <Box>
                  <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    required
                    // label="Last Name"
                    id='lastName'
                    error={!!errors.lastName}
                    aria-describedby="lastName-error"
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
                        'aria-label': 'first name',
                        sx: { height: '2.5rem', width: '100%', borderColor: errors.firstName ? 'red' : '#e2f1e7', }
                    }}
                    name="firstName"
                />
                {errors.lastName && <span id="firstName-error" role="alert" aria-live="assertive" className="text-red-500 text-sm">{errors.lastName.message}</span>}
                </Box>} />
            </Box>
        </div>
    );
};

export default NameForm;