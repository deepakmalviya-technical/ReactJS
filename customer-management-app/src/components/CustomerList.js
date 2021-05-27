import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import axios from "../helpers/axios";
import CustomerCard from "./CustomerCard";

function CustomerList() {

    const history = useHistory();
    const [allCustomers, setAllCustomers] = useState([]);
    const [customerDetail, setCustomerDetail] = useState({});
    const [change, setChange] = useState(0);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let isSubscribed = true
        a()
        async function a() {
            const res = await axios.get('/');
            if (isSubscribed) {
                setAllCustomers(res.data.customers);
                setIsLoading(false)
            }
        }
        return () => (isSubscribed = false);
    }, [change])

    const editCustomer = (customer) => {
        history.push(`/edit/${customer._id}`);
    }

    const deleteCustomer = async (id) => {
        const confirmBox = window.confirm("Do you really want to delete this Customer");
        if (confirmBox === true) {
            const res = await axios.delete(`/${id}`);
            alert(res.data.msg)
            setChange(a => a + 1)
        }
    }

    const showCustomer = (customer) => {
        setCustomerDetail(customer)
        handleShow()
    }

    return (
        <>
            {
                isLoading ?
                    <div className="text-center mt-5 ">
                        <div className="spinner-border text-success" role="status"></div><br />
                        <div data-testid="loading-spinner" className="text-success" role="status">Loading...</div>
                    </div>
                    :
                    <Table bordered hover >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Status</th>
                                <th>Occupation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCustomers.map((customer, index) => {
                                return (
                                    <tr key={customer._id} data-testid="customer-list">
                                        <td>{index + 1}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.status}</td>
                                        <td>{customer.occupation}</td>
                                        <td>
                                            <box-icon
                                                type='solid' name='pencil' color="blue"
                                                size="cssSize" border="square" animation='tada-hover'
                                                onClick={() => editCustomer(customer)}>
                                            </box-icon>
                                            &nbsp;&nbsp;&nbsp;
                                            <box-icon
                                                type='solid' name='trash' color="red" size="cssSize" border="square" animation='tada-hover'
                                                onClick={() => deleteCustomer(customer._id)}>
                                            </box-icon>
                                            &nbsp;&nbsp;&nbsp;
                                            <box-icon
                                                type='solid' name='info-square' color="blue"
                                                size="cssSize" border="square" animation='tada-hover'
                                                onClick={() => showCustomer(customer)}>
                                            </box-icon>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <CustomerCard
                            show={show}
                            handleClose={handleClose}
                            customerDetail={customerDetail}
                        />
                    </Table>
            }
        </>
    );
}
export default CustomerList;