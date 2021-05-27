import React from "react";
import { useFormContext } from "react-hook-form";

const BasicForm = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Basic Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            ref={register}
            name="firstName"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Middle Name"
            ref={register}
            name="middleName"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            ref={register}
            name="lastName"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
