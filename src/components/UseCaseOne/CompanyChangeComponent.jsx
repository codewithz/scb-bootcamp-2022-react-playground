import React, { Component } from "react";

export class CompanyChangeComponent extends Component {
    state = {

        company: 'Standard Chartered'

    }

    changeCompany = () => {
        // this.state.company = "Standard Charetered Bank" Not allowed in this way
        this.setState(
            {
                company: this.state.company + " Bank !!"
            }
        )
    }

    render() {
        return (
            <div>
                Company Name: {this.state.company}
                <br /><br />
                <button onClick={this.changeCompany}>Change</button>


            </div>
        )
    }
}