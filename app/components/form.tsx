import Consent from "./consent";
import EmailForm from "./emailForm";
import MessageForm from "./message";
import NameForm from "./nameForm";
import Query from "./query";
import { useForm } from "react-hook-form";
import { Box, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import IconSuccess from "../svg/iconSuccess";

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    queryType: string;
  }

const Form = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [submit, setSubmit] = useState(false)
    const [open, setOpen] = useState(false)
    const [contact, setContact] = useState(false);


      const onSubmit = (data: FormData): void => {
        setSubmit(true);
        if (!contact) {
            setOpen(false)
            return
        }
        setOpen(true)
        console.log(contact)
        console.log(data);
        // handle form submission
      };
      

    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <Snackbar
        open={open}
        autoHideDuration={5000}
        sx={{background: '#2d512d', padding: '10px', borderRadius: '10px', color: 'white'}}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
            <div>
            <Box sx={{display: 'flex', gap: '.5rem', alignItems: 'center'}}>
                <IconSuccess />
                <Typography className="font-bold" variant="h6">Message sent!</Typography>
            </Box>
            <Typography>Thansk for completing the form, we'll be in touch soon</Typography>
            </div>
        </Snackbar>
            <NameForm control={control} errors={errors} />
            <EmailForm control={control} errors={errors} />
            <Query control={control} errors={errors} />
            <MessageForm control={control} errors={errors}/>
            <Consent submit={submit} contact={contact} setContact={setContact}/>
        </Box>
    );
};

export default Form;