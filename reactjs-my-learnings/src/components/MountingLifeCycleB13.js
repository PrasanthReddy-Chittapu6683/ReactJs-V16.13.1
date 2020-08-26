import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'PRCV',
        }
        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount ")

    }
    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                <b>LifeCycleB Component Order of Execution in Mounting:</b>
                <small>Check in Console to see the list of order</small>

            </div>
        )
    }

}

export default LifeCycleB
