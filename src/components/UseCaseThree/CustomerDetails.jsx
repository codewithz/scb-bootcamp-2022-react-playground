export function CustomerDetails(props) {

    const { customer } = props

    return (
        <div>
            <p className="lead">Customer Details</p>
            <hr />
            <p>ID: {customer.id}</p>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>Email: {customer.email}</p>

        </div>
    )
}