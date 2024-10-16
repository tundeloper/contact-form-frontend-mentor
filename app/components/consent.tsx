'use client';
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { Dispatch, useState } from "react";

const Consent: React.FC<{submit: boolean, contact: boolean, setContact: Dispatch<React.SetStateAction<boolean>>}> = ({submit, contact, setContact}) => {
    // const [contact, setContact] = useState(false);
    

    return (
        <div className="mt-4">
                <FormGroup sx={{ flex: 1, paddingLeft: '.5rem', margin: '5px 0 5px 0' }}>
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
                <p className="text-red-500 text-sm pl-2 pb-2">{submit && !contact ? 'To submit this form, please consent to beign contacted' : ' '}</p>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: '#0c7d69',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    marginTop: '.5rem',
                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default Consent;