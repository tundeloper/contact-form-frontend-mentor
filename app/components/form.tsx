import { useContext } from "react";
import Consent from "./consent";
import EmailForm from "./emailForm";
import MessageForm from "./message";
import NameForm from "./nameForm";
import Query from "./query";
import { FormContext } from "../context";

const Form = () => {
    const formContext = useContext(FormContext);

    if (!formContext) throw new Error('FormContext must be used within a FormProvider');

    const { validateForm, resetForm } = formContext;

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            alert(JSON.stringify(formContext.formData, null, 2));
            resetForm();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <NameForm />
            <EmailForm />
            <Query />
            <MessageForm />
            <Consent />
        </form>
    );
};

export default Form;