"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";

const ShopFooter = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () =>
    String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSubscription = () => {
    if (!emailInfo) {
      setErrMsg("Please provide an Email!");
    } else if (!emailValidation()) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  const socialLinks = [
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
  ];

  return (
    <footer className="mt-16 border-t border-stone-200/70 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-16 md:grid-cols-2 xl:grid-cols-12">
        <div className="xl:col-span-4">
          <div className="mb-6">
            <p className="font-titleFont text-2xl font-semibold tracking-[0.18em] text-white">
              SHANNY
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-stone-400">
              Commerce House
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-base leading-7 text-stone-300">
              A more polished digital storefront for electronics, accessories, and lifestyle goods,
              built to connect the public shop and your internal dashboard in one place.
            </p>
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer">
                  <li className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 bg-stone-900 text-lg text-stone-200 transition hover:border-[#f1b84b] hover:text-[#f1b84b]">
                    {icon}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

        <div className="xl:col-span-2">
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            {["Powerbanks", "Audio", "Lifestyle", "Wearables", "New Arrivals"].map((item) => (
              <li key={item} className="font-titleFont text-base text-stone-400 transition hover:text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:col-span-2">
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            {["Profile", "Orders", "Addresses", "Account Details", "Dashboard"].map((item) => (
              <li key={item} className="font-titleFont text-base text-stone-400 transition hover:text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:col-span-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full rounded-[1.75rem] border border-stone-800 bg-stone-900/70 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-stone-400">
              Product drops, offers, and restocks
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-base font-titleFont font-semibold text-green-400"
              >
                Subscribed Successfully!
              </motion.p>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex w-full flex-col">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="h-14 w-full rounded-full border border-stone-700 bg-stone-950 px-5 text-base text-white outline-none placeholder:text-sm placeholder:uppercase placeholder:tracking-[0.16em] placeholder:text-stone-500"
                    type="text"
                    placeholder="Enter your email"
                  />
                  {errMsg && <p className="mt-2 text-sm font-semibold text-red-400">{errMsg}</p>}
                </div>
                <button
                  onClick={handleSubscription}
                  className="h-12 rounded-full bg-[#f1b84b] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-[#ffd27a]"
                >
                  Subscribe
                </button>
              </div>
            )}
            <img
              className={`mx-auto ${subscription ? "mt-4" : "mt-8"} w-[80%] lg:w-[60%]`}
              src="/shop/payment.png"
              alt="payment methods"
            />
            <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-[#67d28c]">
              M-Pesa ready
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-container px-4 pb-12">
        <div className="rounded-[1.75rem] border border-stone-800 bg-stone-900/60 p-6">
          <FooterListTitle title="We are located at NRG plaza Nairobi" />
          <iframe
            className="mt-4 w-full rounded-[1.25rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3008746065964!2d36.82855149700053!3d-1.2856053512896024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1170d3a13529%3A0x6355bf4bc9dc05fd!2sRNG%20Plaza!5e0!3m2!1sen!2ske!4v1687254079241!5m2!1sen!2ske"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
};

export default ShopFooter;
