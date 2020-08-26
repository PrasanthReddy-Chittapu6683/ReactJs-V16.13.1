
import React, { Component } from 'react'

class RefsDemo18 extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        this.cbRef = null;
        this.setCallbackRef = (element) => {
            this.cbRef = element;
        }
        this.state = {

        }
    }
    componentDidMount() {
        this.inputRef.current.focus();
        console.log("*****REFS Obj*****")
        console.log(this.inputRef)
        if (this.cbRef) {
            this.cbRef.focus();
            console.log("*****Callback REFS Obj*****")
            console.log(this.cbRef)
        }

    }
    clickRefData = () => {
        if (this.inputRef.current.value) {
            alert(this.inputRef.current.value)
        } else {
            alert('Type some thing in the texbox')
        }
    }
    render() {
        return (
            <div>
                Inside Ref Component:
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickRefData}>Click to capture textbox value using   `inputRef` </button>

                <br />
                <span> Call Back Ref Example</span>
                <input type="text" ref={this.setCallbackRef} />


            </div>
        )
    }
}

export default RefsDemo18
