import { Box, TextField, Typography } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from './form';

const MessageForm: React.FC <{control: Control<FormData>, errors: FieldErrors<FormData>}> = ({control, errors}) => {

    return (
        <div>
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1 mb-2'>
                    <Typography>
                        Message *
                    </Typography>
                </div>
                <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } }} 
                render={({ field }) => <Box>
                  <TextField
                    {...field}
                    variant="outlined"
                    id="message"
                    fullWidth
                    multiline
                    minRows={2}
                    maxRows={4}
                    required
                    name="message"
                    error={!!errors.message}
                    aria-describedby="message-error"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors.message ? 'red' : 'grey'
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
                        'aria-label': 'message',
                        sx: { height: '5rem',}, 
                    }}
                />
                {/* {errors.message && <span id="message-error"
                    role="alert"
                    aria-live="assertive" 
                    className="text-red-500 text-sm">{errors.message}</p>} */}
                </Box>}/>
                
            </Box>
        </div>
    );
}

export default MessageForm;