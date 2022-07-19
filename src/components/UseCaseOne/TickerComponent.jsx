import React, { Component } from "react";

export class TickerComponent extends Component {

    state = {
        counter: 0
    }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount() {
        // this.timer=setInterval(whatToInvoke,afterHowManyMilliseconds)
        this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <hr />
                Time Elapsed : <b>{this.state.counter}</b>
            </div>
        )
    }
}