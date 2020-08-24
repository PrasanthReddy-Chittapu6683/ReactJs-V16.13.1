import React, { Component } from 'react'

export class StateExampleFive extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor - Message is displaying using this.state.'
        }
    }
    subscribeClick = (val) => {
        this.setState({
            message: 'Thanq for subscribing - This is displaying using this.setState({})'
        })
    }
    render() {
        return (
            <div>
                <span>
                    {this.state.message}


                    <button onClick={(su) => this.subscribeClick()}>Subscribe</button>

                </span>
            </div>
        )
    }
}

export default StateExampleFive
