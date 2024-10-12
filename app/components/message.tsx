import { Box, TextField, Typography } from "@mui/material"

const MessageForm = () => {
    return <div>
        <Box sx={{ flex: 1 }}>
        <Typography>Message *</Typography>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          minRows={2}
          maxRows={4}
          InputProps={{
            'aria-label': 'last name',
            sx: { height: '5rem' }, // Adjust the height directly (optional)
          }}
        />
      </Box>
    </div>
}

export default MessageForm
