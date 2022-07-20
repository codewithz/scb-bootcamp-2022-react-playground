import { CustomerDetails } from "./CustomerDetails";
import { CustomerForm } from "./CustomerForm";

export function CustomerList() {
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
            </table>

            <br />
            <br />

            <div className="row">
                <div className="col-md-6 m-2">
                    <CustomerForm />
                </div>



                <div className="col-md-4 m-2">
                    <CustomerDetails />
                </div>
            </div>
        </div >
    )
}