import React, { Component } from 'react'
import MethodsAsPropsChild9 from './MethodsAsPropsChild9'
class MethodsAsPropsParent9 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.clcikinParent = this.clcikinParent.bind(this)
    }
    clcikinParent(messageFromChild) {
        this.setState({
            message: `Goobye from ${messageFromChild}`
        })
    }
    reset = () => {
        this.setState({
            message: `Hello`
        })
    }
    render() {

        return (
            <div>
                <MethodsAsPropsChild9 fromParent={this.clcikinParent}></MethodsAsPropsChild9>
                {this.state.message}
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default MethodsAsPropsParent9
