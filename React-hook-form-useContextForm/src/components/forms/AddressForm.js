import React from "react";
import { useFormContext } from "react-hook-form";

const AddressForm = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Address Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your City"
            ref={register}
            name="city"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Zipcode"
            ref={register}
            name="zipcode"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Village"
            ref={register}
            name="village"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
