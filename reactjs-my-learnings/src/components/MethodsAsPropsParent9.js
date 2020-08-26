import React, { Component } from 'react'
import MethodsAsPropsChild9 from './MethodsAsPropsChild9'
class MethodsAsPropsParent9 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello PRCV'
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
            message: `Hello PRCV`
        })
    }
    render() {

        return (
            <div>
                <MethodsAsPropsChild9 fromParent={this.clcikinParent} prcv={this.state.message}></MethodsAsPropsChild9>
             In Parent Component: ` {this.state.message}`
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default MethodsAsPropsParent9
