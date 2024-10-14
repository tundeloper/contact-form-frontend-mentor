'use client'
import { Box, FormControlLabel, FormGroup, Radio, Typography } from "@mui/material"
import { useState } from "react"

const Query = () => {
    const [checked, setChecked] = useState({ general: false, Support: false })

    return (
        <div className="mb-4">
            <div className="mb-2">
            <Typography>Query Type *</Typography>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
                <Box sx={{ flex: 1, border: '.1px solid grey', borderRadius: '4px', paddingLeft: '.5rem',  background: checked.general? '#e2f1e7' : 'transparent'}}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={checked.general}
                                    sx={{ '&.Mui-checked': { color: 'green' } }}
                                    onChange={() => { setChecked({ general: true, Support: false }) }}
                                />
                            }
                            label="General Enquiry"
                        />
                    </FormGroup>
                </Box>
                <Box sx={{ flex: 1, border: '1px solid #717071c9', borderRadius: '4px', paddingLeft: '.5rem', background: checked.Support? '#e2f1e7' : 'transparent' }}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={checked.Support}
                                    sx={{ '&.Mui-checked': { color: 'green' } }}
                                    onChange={() => { setChecked({ Support: true, general: false }) }}
                                />
                            }
                            label="Support Request"
                        />
                    </FormGroup>
                </Box>
            </div>
        </div>
    )
}

export default Query