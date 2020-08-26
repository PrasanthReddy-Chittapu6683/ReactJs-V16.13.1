import React, { Component } from 'react'
import RefswithClassComponents19 from './RefswithClassComponents19';

class FocusInput19 extends Component {
    constructor(props) {
        super(props)
        this.compoentRef = React.createRef();
    }
    clickHandler = () => {
        //focusInput() is defined inside child component RefswithClassComponents19.js
        this.compoentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <RefswithClassComponents19 ref={this.compoentRef} />
                <button onClick={this.clickHandler}> Click to  Focus on Input</button>
            </div>
        )
    }


}

export default FocusInput19
