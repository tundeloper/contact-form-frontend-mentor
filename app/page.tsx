"use client";
import Form from "./components/form";

export default function Home() {
  return (
      <div className="flex items-center justify-center min-h-screen p-4 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-2 w-[45rem] bg-white p-8" style={{ borderRadius: '2%' }}>
          <h1 className="" style={{ fontSize: '2rem' }}>Contact Us</h1>
          <Form />
        </div>
      </div>
  );
}