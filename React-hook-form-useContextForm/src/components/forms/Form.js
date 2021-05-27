import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import AddressForm from "./AddressForm";
import BasicForm from "./BasicForm";
import ContactForm from "./ContactForm";

const Form = ({ methods }) => {
  // const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <BasicForm />
      <AddressForm />
      <ContactForm />
      <button className="btn btn-primary">Create New Account</button>
    </form>
  );
};

export default Form;
