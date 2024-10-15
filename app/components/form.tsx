import Consent from "./consent";
import EmailForm from "./emailForm";
import MessageForm from "./message";
import NameForm from "./nameForm";
import Query from "./query";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    queryType: string;
  }

const Form = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

      const onSubmit = (data: FormData) => {
        console.log(data);
        // handle form submission
      };
      

    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
            <NameForm control={control} errors={errors} />
            <EmailForm control={control} errors={errors} />
            <Query control={control} errors={errors} />
            <MessageForm control={control} errors={errors}/>
            <Consent/>
        </Box>
    );
};

export default Form;