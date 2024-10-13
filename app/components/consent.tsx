'use client';
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

const Consent = () => {
    const [contact, setContact] = useState(false);

    return (
        <div>
            <Box sx={{ flex: 1, paddingLeft: '.5rem', margin: '5px 0 5px 0' }}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={contact}
                                onChange={() => setContact(prev => !prev)}
                            />
                        }
                        label="I consent to being contacted by the team"
                    />
                </FormGroup>
            </Box>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: 'darkgreen',
                    textTransform: 'capitalize',
                    ':hover': {
                        backgroundColor: 'green',
                    },
                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default Consent;