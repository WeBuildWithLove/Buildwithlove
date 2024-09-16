import Layout from "@/layout";
import React from "react";
import InputComponent from "@/components/Global/InputComponent";
import DropdownComponent from "@/components/Global/DropdownComponent";
import Button from "../../components/Global/Button";

function Contact() {
  return (
    <Layout>
      <div className="max-container padding-container lg:w-[800px] mx-auto my-20 ">
        <div className="flex w-full flex-col item-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Interested in Learning More?</h1>
          <p className="text-sm  my-3">
            Want to discuss your project or need more information? Fill out the
            form below to get in touch with us. At WeCr8t, we&apos;re here to
            help your business thrive with our exceptional digital solutions.
          </p>
        </div>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-7">
          <InputComponent type="text" placeholder="Enter your name" />
          <InputComponent type="email" placeholder="Enter your email" />
          <InputComponent type="tel" placeholder="Phone Number" />
          <InputComponent
            type="text"
            placeholder="How can we help you?"
            className="lg:col-span-2"
          />
        </form>
        <div className="my-[50px]">
          <Button type="filled" text="SUBMIT" fill="#4B0082" />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
