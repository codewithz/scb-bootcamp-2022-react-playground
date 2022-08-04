export function CustomerDetails(props) {

    const { customer } = props

    return (
        <div>
            <p className="lead">Customer Details</p>
            <hr />
            <p>ID: {customer.id}</p>
            <p>Name: {customer.name}</p>
            <p>Account Type: {customer.accountType}</p>
            <p>Email: {customer.email}</p>

        </div>
    )
}