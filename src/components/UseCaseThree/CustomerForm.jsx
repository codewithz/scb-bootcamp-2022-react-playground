import { useState } from "react"
import {
    notifyError, notifySuccess,
    notifyWarning, notifyInfo
} from '../utilities/toastNotifications';

export function CustomerForm(props) {

    const blankCustomer = { id: 0, firstName: '', lastName: '', email: '' }

    const [customer, setCustomer] = useState(blankCustomer)

    const [errors, setErrors] = useState({})

    // Event Handling
    // const handleFirstName = (event) => {
    //     console.log(event.target.name)
    //     console.log(event.target.value)

    //     let customerClone = { ...customer }
    //     customerClone["firstName"] = event.target.value

    //     setCustomer(customerClone)
    // }
    // const handleLastName = (event) => {
    //     console.log(event.target.name)
    //     console.log(event.target.value)

    //     let customerClone = { ...customer }
    //     customerClone["lastName"] = event.target.value

    //     setCustomer(customerClone)
    // }
    // const handleEmail = (event) => {
    //     console.log(event.target.name)
    //     console.log(event.target.value)

    //     let customerClone = { ...customer }
    //     customerClone["email"] = event.target.value

    //     setCustomer(customerClone)
    // }

    // -------------- Refactoring -----------------------

    const handleInput = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)

        const { name, value } = event.target; // Destructuring name and value from event.target
        let customerClone = { ...customer }
        customerClone[name] = value;

        setCustomer(customerClone)
    }

    const handleCustomerSaved = (event) => {
        event.preventDefault()

        const errorsInForms = validateForm();

        if (errorsInForms) {
            notifyError("Invalid Values in the form!!")
            return;
        }



        // If everything is validated
        props.onCustomerSaved(customer)
        setCustomer(blankCustomer)
        notifySuccess("Customer saved successfully")
    }

    const validateForm = () => {

        const errors = {};

        if (customer.firstName.trim() === '') {
            errors.username = 'First Name is required'
        }

        if (customer.lastName.trim() === '') {
            errors.lastName = 'Last Name is required'
        }

        if (customer.email.trim() === '') {
            errors.email = 'Email is required'
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    return (
        <div>
            <p className="lead">Add Customer</p>
            <hr />
            <form className="ui form">
                <div className="form-group">
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Enter First Name"
                        value={customer.firstName}
                        onChange={handleInput}
                    />
                    <div className="alert alert-danger">Error Message</div>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter Last Name"
                        value={customer.lastName}
                        onChange={handleInput}
                    />
                    <div className="alert alert-danger">Error Message</div>
                </div>


                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={customer.email}
                        onChange={handleInput}
                    />
                    <div className="alert alert-danger">Error Message</div>
                </div>
                <button className="btn btn-primary btn-sm m-2"
                    onClick={handleCustomerSaved}>
                    Save
                </button>
            </form>
        </div>
    )
}