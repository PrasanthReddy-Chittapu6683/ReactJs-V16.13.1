import React, { Component } from 'react'
import LifeCycleB from './MountingLifeCycleB13'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'PRCV',
        }
        console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount ")

    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <b>LifeCycleA Component Order of Execution in Mounting:</b>
                <small>Check in Console to see the list of order</small>
                <LifeCycleB></LifeCycleB>

            </div>
        )
    }

}

export default LifeCycleA
