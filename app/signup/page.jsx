"use client";
import { useState } from "react";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const fields = [
  { key: "clientName", label: "Full Name", type: "text", placeholder: "eg. John Doe" },
  { key: "email", label: "Work Email", type: "email", placeholder: "john@workemail.com" },
  { key: "phone", label: "Phone Number", type: "text", placeholder: "+254 000 000 000" },
  { key: "password", label: "Password", type: "password", placeholder: "Create password" },
  { key: "address", label: "Address", type: "text", placeholder: "road-001, house-115, example area" },
  { key: "city", label: "City", type: "text", placeholder: "Your city" },
  { key: "country", label: "Country", type: "text", placeholder: "Your country" },
  { key: "zip", label: "Zip/Postal code", type: "text", placeholder: "Your zip code" },
];

export default function SignUpPage() {
  const [form, setForm] = useState({ clientName: "", email: "", phone: "", password: "", address: "", city: "", country: "", zip: "" });
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!checked) return;

    const newErrors = {};
    if (!form.clientName) newErrors.clientName = "Enter your name";
    if (!form.email) newErrors.email = "Enter your email";
    else if (!emailRegex.test(form.email)) newErrors.email = "Enter a Valid email";
    if (!form.phone) newErrors.phone = "Enter your phone number";
    if (!form.password) newErrors.password = "Create a password";
    else if (form.password.length < 6) newErrors.password = "Passwords must be at least 6 characters";
    if (!form.address) newErrors.address = "Enter your address";
    if (!form.city) newErrors.city = "Enter your city name";
    if (!form.country) newErrors.country = "Enter the country you are residing";
    if (!form.zip) newErrors.zip = "Enter the zip code of your area";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccessMsg(
      `Hello dear ${form.clientName}, Welcome to Shanny Shop. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${form.email}`
    );
    setForm({ clientName: "", email: "", phone: "", password: "", address: "", city: "", country: "", zip: "" });
  };

  const features = [
    { title: "Get started fast with ShannyTech", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { title: "Access all ShannyTech services", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { title: "Trusted by online Shoppers", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
  ];

  return (
    <div className="bg-white text-gray-900 font-bodyFont w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link href="/">
            <img src="/shop/logoLight.png" alt="logo" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Get started for free</h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          {features.map(({ title, desc }) => (
            <div key={title} className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">{title}</span>
                <br />
                {desc}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-10">
            {["© ShannyTech", "Terms", "Privacy", "Security"].map((item) => (
              <p key={item} className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">{successMsg}</p>
            <Link href="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">
                {fields.map(({ key, label, type, placeholder }) => (
                  <div key={key} className="flex flex-col gap-1">
                    <p className="font-titleFont text-base font-semibold text-gray-600">{label}</p>
                    <input
                      onChange={(e) => setField(key, e.target.value)}
                      value={form[key]}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type={type}
                      placeholder={placeholder}
                    />
                    {errors[key] && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>{errors[key]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the ShannyTech{" "}
                    <span className="text-blue-500">Terms of Service</span> and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300`}
                >
                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Already have an Account?{" "}
                  <Link href="/signin">
                    <span className="hover:text-blue-600 duration-300">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
