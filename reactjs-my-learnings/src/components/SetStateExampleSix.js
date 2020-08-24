import React, { Component } from 'react'

class SetStateExampleSix extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('Call Back:' + this.state.count)
            });
        console.log(this.state.count)
    }
    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        },
            () => {
                console.log('Call Back:' + this.state.count)
            });
        console.log(this.state.count)
    }
    IncFive = () => {
        this.IncFiveTimes();
        this.IncFiveTimes();
        this.IncFiveTimes();
        this.IncFiveTimes();
        this.IncFiveTimes();
    }
    IncFiveTimes = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increment()} >Increment</button>
                <button onClick={() => this.Decrement()} >Decrement</button>
                <button onClick={() => this.IncFive()} >Increment 5 times</button>
            </div >
        )
    }
}

export default SetStateExampleSix
