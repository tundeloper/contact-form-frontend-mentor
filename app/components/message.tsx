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
                <div className='flex justify-between items-center font-1'>
                    <Typography style={{ color: errors.message ? 'red' : 'inherit' }}>
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
                    InputProps={{
                        'aria-label': 'message',
                        sx: { height: '5rem', border: errors.message ? '.1px solid red' : 'inherit' }, // Adjust the height directly (optional)
                    }}
                />
            </Box>
        </div>
    );
}

export default MessageForm;