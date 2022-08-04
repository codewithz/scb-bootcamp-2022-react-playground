import { useEffect, useState } from "react";

import { CustomerDetails } from "./CustomerDetails";
import { CustomerForm } from "./CustomerForm";
import customerData from './customers.json'

import axios from 'axios';


export function CustomerList() {

    const baseURL = "http://localhost:9099/api/v1/rpg/common";

    const [customers, setCustomers] = useState(customerData);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

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

    const addCustomer = (newCustomer) => {
        const totalCustomers = customers.length;
        newCustomer.id = totalCustomers + 1;
        let customersClone = [...customers];
        customersClone.push(newCustomer)

        setCustomers(customersClone)
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
                                </tr>
                        )
                    }
                </tbody>
            </table>

            <br />
            <br />

            <div className="row">
                <div className="col-md-6 m-2">
                    <CustomerForm onCustomerSaved={addCustomer} />
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