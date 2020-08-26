import React, { Component } from 'react'

class RefswithClassComponents19 extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                Insied  RefswithClassComponents19
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default RefswithClassComponents19
