import React, { Component } from 'react'
import ForwardRefComponent20 from './ForwardRefComponent20'

class ForwardRefParentComponent20 extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    parentButtonClick = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <ForwardRefComponent20 ref={this.inputRef}> </ForwardRefComponent20>
                <button onClick={this.parentButtonClick}>Focus Input</button>

            </div>
        )
    }
}

export default ForwardRefParentComponent20
