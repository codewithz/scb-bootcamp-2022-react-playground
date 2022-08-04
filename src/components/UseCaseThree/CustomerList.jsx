import { useEffect, useState } from "react";

import { CustomerDetails } from "./CustomerDetails";
import { CustomerForm } from "./CustomerForm";
import customerData from './customers.json'
import axios from "axios";

import {
    notifyError, notifySuccess,
    notifyWarning, notifyInfo
} from '../utilities/toastNotifications';

import config from '../../config.json';

import http from "../../services/HttpService";


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
        try {
            const result = await http.get(apiEndPoint);
            console.log(result.data)
            setCustomers(result.data.body)
        }
        catch (ex) {
            // Expected Errors can be taken care here
        }
    }

    const addCustomer = () => {
        getCustomers();
    }

    const deleteCustomer = async (event, id) => {
        event.preventDefault();

        //  alert(id);

        // const apiEndPoint = `${baseURL}/customers/${id}`;
        const apiEndPoint = `${baseURL}/customers-zartab/20000`;

        try {

            const response = await http.delete(apiEndPoint);

            if (response.data.status === 200) {
                notifySuccess("Customer Deleted Successfully!!");
                getCustomers();
            }
        }
        catch (ex) {

            if (ex.response && ex.response.status === 404) {
                notifyError(ex.response.data.message)
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