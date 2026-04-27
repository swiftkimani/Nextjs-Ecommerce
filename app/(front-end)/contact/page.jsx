"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/shop/Breadcrumbs";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function ContactPage() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) setErrClientName("Enter your Name");
    if (!email) {
      setErrEmail("Enter your Email");
    } else if (!emailRegex.test(email)) {
      setErrEmail("Enter a Valid Email");
    }
    if (!messages) setErrMessages("Enter your Messages");

    if (clientName && email && emailRegex.test(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Further details will be sent to you by your email at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">Fill up a Form</h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            {[
              { label: "Name", value: clientName, onChange: (v) => { setClientName(v); setErrClientName(""); }, err: errClientName, type: "text", placeholder: "Enter your name here" },
              { label: "Email", value: email, onChange: (v) => { setEmail(v); setErrEmail(""); }, err: errEmail, type: "email", placeholder: "Enter your email here" },
            ].map(({ label, value, onChange, err, type, placeholder }) => (
              <div key={label}>
                <p className="text-base font-titleFont font-semibold px-2">{label}</p>
                <input
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type={type}
                  placeholder={placeholder}
                />
                {err && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {err}
                  </p>
                )}
              </div>
            ))}
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Messages</p>
              <textarea
                onChange={(e) => { setMessages(e.target.value); setErrMessages(""); }}
                value={messages}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                placeholder="Enter your message here"
              />
              {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errMessages}
                </p>
              )}
            </div>
            <button
              onClick={handlePost}
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
