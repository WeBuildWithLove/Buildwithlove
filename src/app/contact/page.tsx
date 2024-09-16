"use client";

import Layout from "@/layout";
import React from "react";
import InputComponent from "@/components/Global/InputComponent";
import DropdownComponent from "@/components/Global/DropdownComponent";
import Button from "../../components/Global/Button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_QUOTE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const sendEmail = async () => {
    try {
      if (!name || !email || !phone || !message) {
        toast.error("Please fill all the fields");
      } else {
        setLoading(true);
        const templateParams = {
          from_name: name,
          from_email: email,
          from_phone: phone,
          message: message,
        };

        const res = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        console.log(res);
        setLoading(false);
        toast.success("Email sent successfully");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send email");
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className="max-container padding-container lg:w-[800px] mx-auto my-10 ">
        <div className="flex w-full flex-col item-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Interested in Learning More?</h1>
          <p className="text-sm  my-1">
            Want to discuss your project or need more information? Fill out the
            form below to get in touch with us. At WeCr8t, we&apos;re here to
            help your business thrive with our exceptional digital solutions.
          </p>
        </div>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[10px]">
          <InputComponent
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
          <InputComponent
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <InputComponent
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone Number"
          />
          <InputComponent
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="How can we help you?"
            className="lg:col-span-2"
          />
        </form>
        <div className="my-[50px]">
          <Button
            disabled={loading}
            onClick={sendEmail}
            type="filled"
            text={`${loading ? "SENDING..." : "SUBMIT"}`}
            fill="#4B0082"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
