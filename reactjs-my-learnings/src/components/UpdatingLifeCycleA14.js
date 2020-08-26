import React, { Component } from 'react'
import UpdateLifeCycleB from './UpdatingLifeCycleB14'

class UpdateLifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'PRCV',
        }
        console.log("UpdateLifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("UpdateLifeCycleA getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate() {
        console.log("UpdateLifeCycleA shouldComponentUpdate");
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("UpdateLifeCycleA getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate getSnapshotBeforeUpdate");

    }
    componentDidMount() {
        console.log("UpdateLifeCycleA componentDidMount ")

    }
    changeState = () => {
        this.setState({
            name: 'React Js LifeCycle Concepts'
        })
    }
    render() {
        console.log("UpdateLifeCycleA render")
        return (
            <div>
                <b>UpdateLifeCycleA Component Order of Execution in Mounting:</b>
                <small>Check in Console to see the list of order</small>

                <button onClick={this.changeState}> Change State</button>
                <UpdateLifeCycleB></UpdateLifeCycleB>

            </div>
        )
    }

}

export default UpdateLifeCycleA
