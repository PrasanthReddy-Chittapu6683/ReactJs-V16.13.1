import React, { Component } from 'react'
import RegualrComponent16 from './RegualrComponent16'
import PureComponent16 from './PureComponent16'

class ParentComponent16 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'PRCV'
        }
    }
    componentDidMount() {
        //Uncomment this to see the logs in console
        // setInterval(() => {
        //     this.setState({
        //         name: 'PRCV'
        //     })
        // }, 2000)
    }
    render() {
        console.log("****************Parent Component*****************");
        return (
            <div>
                <b> Inside Parent Component</b>
                <RegualrComponent16 name={this.state.name}></RegualrComponent16>
                <PureComponent16 name={this.state.name}></PureComponent16>
            </div>
        )
    }
}

export default ParentComponent16
