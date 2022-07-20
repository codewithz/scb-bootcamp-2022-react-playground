export function CustomerForm() {
    return (
        <div>
            <p className="lead">Add Customer</p>
            <hr />
            <form className="ui form">
                <div className="form-group">
                    <input
                        type="text"
                        name="first-name"
                        className="form-control"
                        placeholder="Enter First Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="last-name"
                        className="form-control"
                        placeholder="Enter Last Name"
                    />
                </div>


                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                    />
                </div>
                <button className="btn btn-primary btn-sm m-2">
                    Save
                </button>
            </form>
        </div>
    )
}