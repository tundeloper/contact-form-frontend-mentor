'use client'
import { FormControlLabel, FormGroup, Radio, Typography } from "@mui/material"
import { useState } from "react"
import { Control, Controller, FieldErrors, } from "react-hook-form";
import { FormData } from './form';


const Query: React.FC <{control: Control<FormData>, errors: FieldErrors<FormData>}> = ({control, errors}) => {
    const [checked, setChecked] = useState({ general: false, Support: false })

    return (
        <div className="mb-4">
            <div className="mb-2">
            <Typography>Query Type *</Typography>
            </div>
                <Controller
                name="queryType"
                control={control}
                defaultValue=""
                rules={{ required: 'Please select a query type' }}
                render={({ field }) => (
                <FormGroup {...field} aria-describedby="queryType-error" className='flex translate-x-4  flex-col gap-4 sm:flex-row'>
                        <FormControlLabel
                            value="general"
                            label="General Enquiry"
                            sx={{ flex: 1, border: '.1px solid grey', borderRadius: '4px',  background: checked.general? '#e2f1e7' : 'transparent'}}
                            control={
                                <Radio
                                    checked={checked.general}
                                    sx={{ '&.Mui-checked': { color: 'green' } }}
                                    onChange={() => { setChecked({ general: true, Support: false }) }}
                                />
                            }
                        />
                
                        <FormControlLabel
                            value="support"
                            label="Support Request"
                            sx={{ flex: 1, border: '1px solid #717071c9', borderRadius: '4px', background: checked.Support? '#e2f1e7' : 'transparent' }}
                            control={
                                <Radio
                                    checked={checked.Support}
                                    sx={{ '&.Mui-checked': { color: 'green' } }}
                                    onChange={() => { setChecked({ Support: true, general: false }) }}
                                />
                            }
                        />
                    </FormGroup>
          )}
        />
        {errors.queryType && <span 
                  id="email-error"
                  role="alert"
                  aria-live="assertive" 
                  className="text-red-500 text-sm">{errors.queryType.message}</span >}
        </div>
    )
}

export default Query