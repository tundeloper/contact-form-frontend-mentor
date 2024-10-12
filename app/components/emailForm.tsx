import { Box, TextField, Typography } from "@mui/material"

const EmailForm = () => {
    return <div>
        <Box sx={{ flex: 1 }}>
        <Typography>Email Address *</Typography>
        <TextField variant="outlined" fullWidth InputProps={{ 'aria-label': 'first name', sx: {height: '2.5rem'}}} />
      </Box>
    </div>
}

export default EmailForm