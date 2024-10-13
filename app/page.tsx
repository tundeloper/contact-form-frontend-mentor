"use client"
import { FormContext, FormProvider } from "./context";
import { useContext } from "react";
import Form from "./components/form";

export default function Home() {

  return (
    <FormProvider>
    <div className="flex  items-center justify-center min-h-screen p-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2 w-[36rem] bg-white p-4" style={{borderRadius: '2%'}}>
      <h1 className="font-bold" style={{fontSize: '1.5rem'}}>Contact Us</h1>
      <Form />
      </div>
    </div>
    </FormProvider>
  );
}
