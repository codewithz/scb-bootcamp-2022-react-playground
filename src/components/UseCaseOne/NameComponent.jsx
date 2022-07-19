import React, { Component } from "react";

export class NameComponent extends Component {

    render() {
        return (
            <div>
                My name is <b>{this.props.name}</b>
            </div>
        )
    }
}