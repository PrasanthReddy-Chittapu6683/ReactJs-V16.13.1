import React, { Component } from 'react'
import MemoComponent17 from './MemoFunctionalComponent17'

class MemoParentComponent17 extends Component {

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
        console.log("-------------------Parent Component for Memo (It keeps rendering because we set Interval)-------------------");
        return (
            <div>
                <MemoComponent17 name={this.state.name}></MemoComponent17>
            </div>
        )
    }
}

export default MemoParentComponent17
