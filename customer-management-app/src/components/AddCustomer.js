import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import Datetime from "react-datetime";

import Select from "../containers/Select";
import axios from '../helpers/axios';
import './style.css';
import { apiUrl } from "../helpers/urlConfig";

function AddCustomer(props) {
    let history = useHistory();
    let { id } = useParams(); // Customer ID for Update
    let [buttonName, setButtonName] = useState("Add Customer");
    let [profilePic, setProfilePic] = useState("")
    let [newProfilePicture, setNewProfilePicture] = useState()


    // get Single Customer Data if id
    async function getData() {
        let res = await axios.get(`/getCustomer/${id}`); // Get Customer API
        const { firstName, lastName, occupation, dob, status, bio, profilePicture } = res.data;
        if (res.status === 200) {
            setButtonName("Update Customer");
            setProfilePic(profilePicture);
            setValue('firstName', firstName);
            setValue('lastName', lastName);
            setValue('occupation', occupation);
            setValue('status', status);
            setValue('bio', bio);
            setValue('dob', new Date(dob));
            // reset(res.data) // This also work instead of setValue
        }
    }

    useEffect(() => {
        if (id) { getData() }
    })

    const { register, handleSubmit, formState: { errors }, control, reset, setValue } = useForm({
        mode: "onBlur"
    });

    // Handle Submit Method
    const submitForm = async (data) => {
        const { firstName, lastName, occupation, dob, status, bio, profilePicture } = data;
        let res;

        if (id) {
            data.id = id;
            data.dob = new Date(dob);
            res = await axios.put('/', data); // Update Customer API
        } else {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("occupation", occupation);
            dob && formData.append("dob", new Date(dob));
            formData.append("status", status);
            formData.append("bio", bio);
            profilePicture[0] && formData.append("profilePicture", profilePicture[0]);
            res = await axios.post('/', formData); // Add Customer API
        }
        if (res.status === 200) {
            alert(res.data.msg);
            history.push('/list');
        }
        else { alert('Something Went Wrong !!') }
        reset({}); // Reset Form After Submitting
    };

    // For Update Profle Picture
    const uploadProfilePic = async (e) => {
        e.preventDefault();
        if (newProfilePicture) {
            const formData = new FormData();
            formData.append("profilePicture", newProfilePicture);
            formData.append("id", id);
            const res = await axios.post("/uploadProfilePicture", formData)
            if (res.status === 200) {
                alert(res.data.msg)
                setProfilePic(res.data.profilePicture)
            }
        } else {
            window.alert('Choose Profile Picture to Upload !')
        }
    }

    return (
        <>
            <div className="text-center mt-1"><h1>{buttonName}</h1></div>
            <div className="d-flex justify-content-center container py-3">
                <form onSubmit={handleSubmit(submitForm)} className="w-50">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            autoComplete="off"
                            placeholder="First Name..."
                            {...register('firstName', { required: "First Name Required" })}
                        />
                    </div>
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className="form-control"
                            autoComplete="off"
                            type="text"
                            name="lastName"
                            placeholder="Last Name..."
                            {...register('lastName', { required: "Last Name Required" })}
                        />
                    </div>
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <div className="form-group">
                        <Select
                            register={register}
                            name="occupation"
                            label="Occupation"
                            required="Please Select Occupation"
                            options={["Student", "Employed", "Bussiness"]}
                        />
                        {errors.occupation && <p>{errors.occupation.message}</p>}
                    </div>

                    <div className="form-group">
                        <label>DOB</label>
                        <Controller
                            control={control}
                            name="dob"
                            render={({ field }) => (
                                <Datetime
                                    {...field}
                                    {...register('dob')}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    isClearable="true"
                                    closeOnSelect="true"
                                    onChange={(e) => field.onChange(e._d)}
                                    selected={field.value}
                                    inputProps={
                                        {
                                            placeholder: 'Select DOB',
                                        }
                                    }
                                />
                            )}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender" className="mr-4">Status</label>
                        <div className="form-check form-check-inline">
                            <input
                                {...register("status")}
                                value="Active"
                                className="form-check-input"
                                type="radio"
                                name="status"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="status">Active</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                {...register("status")}
                                value="Inactive"
                                className="form-check-input"
                                type="radio"
                                name="status"
                            />
                            <label className="form-check-label" htmlFor="status">Inactive</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label className="form-check-label">Bio</label>
                            <textarea {...register("bio")} className="form-control"></textarea>
                        </div>
                    </div>

                    {!id ?
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Profile Picture</label>
                            <input
                                type="file"
                                {...register("profilePicture")}
                                className="form-control"
                                id="exampleFormControlFile1"
                            />
                        </div>
                        :
                        <div className="form-group">
                            <label className="form-check-label">Profile Pic</label>
                            <div>
                                {profilePic && <img width="100px" src={`${apiUrl}/${profilePic}`} alt="profilePic" />}
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleFormControlFile1"
                                    onChange={(e) => setNewProfilePicture(e.target.files[0])}
                                />
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={uploadProfilePic}
                                >
                                    Upload Profile Pic
                                </button>
                            </div>
                        </div>
                    }
                    <button type="submit" className="btn btn-primary">{buttonName}</button>
                </form>
            </div>
        </>
    );
}

export default AddCustomer;