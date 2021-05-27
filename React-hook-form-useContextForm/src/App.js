import React from "react";
import Form from "./components/forms/Form";
import "./styles.css";
import { useForm, FormProvider } from "react-hook-form";
export default function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="container py-4">
        <Form methods={methods} />
      </div>
    </FormProvider>
  );
}
