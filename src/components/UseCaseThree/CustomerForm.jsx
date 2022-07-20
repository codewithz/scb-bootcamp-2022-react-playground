import { useState } from "react"

export function CustomerForm() {

    const blankCustomer = { id: 0, firstName: '', lastName: '', email: '' }

    const [customer, setCustomer] = useState(blankCustomer)

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
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter Last Name"
                        onChange={handleInput}
                    />
                </div>


                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={handleInput}
                    />
                </div>
                <button className="btn btn-primary btn-sm m-2">
                    Save
                </button>
            </form>
        </div>
    )
}