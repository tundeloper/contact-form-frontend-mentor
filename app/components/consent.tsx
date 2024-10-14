'use client';
import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

const Consent = () => {
    const [contact, setContact] = useState(false);

    return (
        <div className="mt-4">
            <Box sx={{ flex: 1, paddingLeft: '.5rem', margin: '5px 0 5px 0' }}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={contact}
                                sx={{ '&.Mui-checked': { color: 'green' } }}
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
                    fontWeight: 'bold',
                    marginTop: '.5rem',
                    marginBottom: '1rem',
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