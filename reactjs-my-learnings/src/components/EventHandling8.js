import React, { Component } from 'react'

class EventHandlingClassComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    onclickeve = () => {
        console.log("Hi, ClassComp Click event")
        this.setState({
            message :' Good bye'
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onclickeve()}>click</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}



function EventHandlingFunctinalComp() {
    function onclickeve() {
        console.log("Hi , FunctinalComp Click event")
    }
    return (
        <div>
            <button onClick={onclickeve}>click</button>
        </div>
    )
}


export { EventHandlingClassComp, EventHandlingFunctinalComp }
