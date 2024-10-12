import Image from "next/image";
import NameForm from "./components/nameForm";
import EmailForm from "./components/emailForm";
import MessageForm from "./components/message";
import Query from "./components/query";
import Consent from "./components/consent";

export default function Home() {
  return (
    <div className="flex  items-center justify-center min-h-screen p-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2 w-[36rem] bg-white p-4" style={{borderRadius: '2%'}}>
      <h1 className="mb-4">Contact us</h1>
        <NameForm />
        <EmailForm />
        <Query />
        <MessageForm />
        <Consent />
      </div>
    </div>
  );
}
