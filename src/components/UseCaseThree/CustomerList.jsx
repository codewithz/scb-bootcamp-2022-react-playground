import { useDebugValue, useState } from "react";

import { CustomerDetails } from "./CustomerDetails";
import { CustomerForm } from "./CustomerForm";
import customerData from './customers.json'


export function CustomerList() {

    const [customers, setCustomers] = useState(customerData);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const onCustomerSelect = (customer) => {
        setSelectedCustomer(customer)
    }

    return (
        <div>
            <p className="lead m-2">Customer List</p>
            <table
                className="table table-hover table-bordered table-sm m-2">
                <thead className="thead">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
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
                    <CustomerForm />
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