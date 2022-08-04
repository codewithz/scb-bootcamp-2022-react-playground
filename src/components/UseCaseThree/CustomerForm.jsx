import { useState, useEffect } from "react"
import {
    notifyError, notifySuccess,
    notifyWarning, notifyInfo
} from '../utilities/toastNotifications';
import Joi from 'joi-browser'
import axios from "axios";


export function CustomerForm(props) {

    const baseURL = "http://localhost:9099/api/v1/rpg/common";

    const blankCustomer = { id: 0, name: '', email: '', accountType: '' }

    const [customer, setCustomer] = useState(blankCustomer)

    const [errors, setErrors] = useState({})

    useEffect(() => {

        loadCustomer();

    }, [props.id]);

    const loadCustomer = async () => {
        if (props.id > 0) {
            const apiEndPoint = `${baseURL}/customers/${props.id}`;
            const result = await axios.get(apiEndPoint);
            console.log(result.data);
            setCustomer(result.data.body);
        }
    }

    // Joi ---- Schema Impl 

    const schema = {

        name: Joi.string().required(),
        email: Joi.string().email().required(),
        accountType: Joi.string()
    }



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

        // if (name === 'firstName') {
        //     if (value.trim() === '') {
        //         return 'First Name is empty'
        //     }
        // }
        // if (name === 'lastName') {
        //     if (value.trim() === '') {
        //         return 'Last Name is empty'
        //     }
        // }
        // if (name === 'email') {
        //     if (value.trim() === '') {
        //         return 'Email is empty'
        //     }
        // }

        const subSchema = { name: schema[name] }
        console.log(subSchema)

        const object = { [name]: value }

        const result = Joi.validate(object, subSchema)

        if (!result.error) {
            return null;
        }
        else {
            return result.error.details[0].message
        }




    }

    const handleCustomerSaved = async (event) => {
        event.preventDefault()

        // const errorsInForms = validateForm();

        const errorsInForms = null;

        if (errorsInForms) {
            notifyError("Invalid Values in the form!!")
            return;
        }



        // If everything is validated

        // If customer.id === 0 --> trying to add a new customer

        if (customer.id === 0) {
            const apiEndPoint = `${baseURL}/customers`
            customer.accountCreationDate = '2022-01-02';
            const response = await axios.post(apiEndPoint, customer);
            if (response.data.status === 201) {
                notifySuccess("Customer Added Successfully");
                clearForm();
            }
        }
        else {
            const apiEndPoint = `${baseURL}/customers/${customer.id}`
            customer.accountCreationDate = '2022-01-02';
            const response = await axios.put(apiEndPoint, customer);
            if (response.data.status === 201) {
                notifyWarning("Customer Updated Successfully");
                clearForm();
            }
        }




        props.onCustomerSaved()
        setCustomer(blankCustomer)
        notifySuccess("Customer saved successfully")
    }

    const validateForm = () => {

        // const errors = {};

        // if (customer.firstName.trim() === '') {
        //     errors.username = 'First Name is required'
        // }

        // if (customer.lastName.trim() === '') {
        //     errors.lastName = 'Last Name is required'
        // }

        // if (customer.email.trim() === '') {
        //     errors.email = 'Email is required'
        // }

        // return Object.keys(errors).length === 0 ? null : errors;

        // const result=Joi.validate(whatToValidate,againstWhichSchema,extraOptions)
        const options = { abortEarly: false }
        const result = Joi.validate(customer, schema, options)

        console.log('Result from Joi', result)

        if (!result.error) {
            return null;

        }
        else {
            const errorsInForm = {};

            for (let item of result.error.details) {
                errorsInForm[item.path[0]] = item.message;
            }
            setErrors(errorsInForm)
            return errorsInForm;
        }

    }

    const clearForm = (event) => {
        event.preventDefault();
        setCustomer(blankCustomer)
    }

    return (
        <div>
            <p className="lead">Add/Update Customer</p>
            <hr />
            <form className="ui form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={customer.name}
                        onChange={handleInput}
                    />
                    {
                        errors.name &&
                        <div className="alert alert-danger">{errors.name}</div>
                    }
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="accountType"
                        className="form-control"
                        placeholder="Enter Account Type"
                        value={customer.accountType}
                        onChange={handleInput}
                    />
                    {
                        errors.accountType &&
                        <div className="alert alert-danger">{errors.accountType}</div>
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
                    onClick={(event) => handleCustomerSaved(event)}>
                    Save / Update
                </button>
                <button className="btn btn-warning btn-sm m-2"
                    onClick={clearForm}>
                    Clear
                </button>
            </form>
        </div>
    )
}