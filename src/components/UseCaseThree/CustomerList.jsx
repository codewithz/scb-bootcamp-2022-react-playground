import { useEffect, useState } from "react";

import { CustomerDetails } from "./CustomerDetails";
import { CustomerForm } from "./CustomerForm";
import customerData from './customers.json'

import axios from 'axios';

import {
    notifyError, notifySuccess,
    notifyWarning, notifyInfo
} from '../utilities/toastNotifications';

import config from '../../config.json';


export function CustomerList() {

    const baseURL = config.baseURL;

    const [customers, setCustomers] = useState(customerData);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [id, setId] = useState(0);

    const onCustomerSelect = (customer) => {
        setSelectedCustomer(customer)
    }

    const apiEndPoint = `${baseURL}/customers`;

    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = async () => {
        const result = await axios.get(apiEndPoint);
        console.log(result.data)
        setCustomers(result.data.body)
    }

    const addCustomer = () => {
        getCustomers();
    }

    const deleteCustomer = async (event, id) => {
        event.preventDefault();

        alert(id);

        // const apiEndPoint = `${baseURL}/customers/${id}`;
        const apiEndPoint = `${baseURL}/customers/20000`;

        try {

            const response = await axios.delete(apiEndPoint);

            if (response.data.status === 200) {
                notifySuccess("Customer Deleted Successfully!!");
                getCustomers();
            }
        }
        catch (ex) {
            console.log('ex.request', '--->', ex.request);
            console.log('ex.response', '--->', ex.response);

            // Expected [404:Not Found | 400: Bad Request] -- CLIENT ERRORS
            // -- Display a specific message
            if (ex.response && ex.response.status === 404) {
                notifyError(ex.response.data.message)
            }

            //Unxecpected [Network Down | Server Down | Bug | DB Down]
            // -- Log Them
            // -- Display a generic message
            else {
                notifyError('🚨 Some unexpected error occured')
            }
        }


    }

    return (
        <div>
            <p className="lead m-2">Customer List</p>
            <table
                className="table table-hover table-bordered table-sm m-2">
                <thead className="thead">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Account Type</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(
                            (customer) =>
                                <tr key={customer.id}
                                    onClick={() => onCustomerSelect(customer)}
                                >
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.accountType}</td>
                                    <td>{customer.email}</td>
                                    <td>
                                        <button

                                            className="btn btn-warning btn-sm m-2"
                                            onClick={() => setId(customer.id)}
                                        >
                                            Show
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm m-2"
                                            onClick={(event) => deleteCustomer(event, customer.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                        )
                    }
                </tbody>
            </table>

            <br />
            <br />

            <div className="row">
                <div className="col-md-6 m-2">
                    <CustomerForm
                        onCustomerSaved={addCustomer}
                        id={id} />
                </div>



                <div className="col-md-4 m-2">
                    {
                        selectedCustomer ?
                            <CustomerDetails customer={selectedCustomer} /> : null
                    }
                </div>
            </div>
        </div >
    )
}