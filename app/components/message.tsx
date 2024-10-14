import { Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../context";

const MessageForm = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { formData, errors, handleInputChange } = formContext;

    return (
        <div>
            <Box sx={{ flex: 1 }}>
                <div className='flex justify-between items-center font-1 mb-2'>
                    <Typography>
                        Message *
                    </Typography>
                </div>
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={2}
                    maxRows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
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
                        sx: { height: '5rem',}, // Adjust the height directly (optional)
                    }}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </Box>
        </div>
    );
}

export default MessageForm;