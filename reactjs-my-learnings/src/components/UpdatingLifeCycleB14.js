import React, { Component } from 'react'


class UpdateLifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'PRCV',
        }
        console.log("UpdateLifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("UpdateLifeCycleB getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate() {
        console.log("UpdateLifeCycleB shouldComponentUpdate");
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdateLifeCycleB getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("UpdateLifeCycleB componentDidUpdate ");

    }
    componentDidMount() {
        console.log("UpdateLifeCycleB componentDidMount ")

    }
    render() {
        console.log("UpdateLifeCycleB render")
        return (
            <div>
                <b>UpdateLifeCycleB Component Order of Execution in Mounting:</b>
                <small>Check in Console to see the list of order</small>


            </div>
        )
    }

}

export default UpdateLifeCycleB
