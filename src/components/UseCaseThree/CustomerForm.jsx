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

        const errorsClone = { ...errors } // Taking clone of errors in state 
        const errorMessage = validateProperty(name, value); //calling validate property to check my function

        if (errorMessage) {  //If errorMessage is not null ex: firstName
            errorsClone[name] = errorMessage //errorsClone[firstName]=errorMessage
        }
        else {
            delete errorsClone[name] //delete errorsClone["firstName"]
        }

        setErrors(errorsClone) //set it back to state


        let customerClone = { ...customer }
        customerClone[name] = value;

        setCustomer(customerClone)
    }

    const validateProperty = (name, value) => {

        if (name === 'firstName') {
            if (value.trim() === '') {
                return 'First Name is empty'
            }
        }
        if (name === 'lastName') {
            if (value.trim() === '') {
                return 'Last Name is empty'
            }
        }
        if (name === 'email') {
            if (value.trim() === '') {
                return 'Email is empty'
            }
        }

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
                    {
                        errors.firstName &&
                        <div className="alert alert-danger">{errors.firstName}</div>
                    }
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
                    {
                        errors.lastName &&
                        <div className="alert alert-danger">{errors.lastName}</div>
                    }
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
                    {
                        errors.email &&
                        <div className="alert alert-danger">{errors.email}</div>
                    }
                </div>
                <button className="btn btn-primary btn-sm m-2"
                    onClick={handleCustomerSaved}>
                    Save
                </button>
            </form>
        </div>
    )
}