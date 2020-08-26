import React, { Component } from 'react'

class IfElseConditionalRendering10 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            islogged: false
        }
    }

    render() {



        if (this.state.islogged) {
            return <div>  Hey PRCV </div>
        }
        else {
            return <div> Hello React  </div>
        }
    }
}



class ElementConditionalRendering10 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            islogged: false
        }
    }
    render() {
        let message
        if (this.state.islogged) {
            message = <div>  Hey PRCV </div>
        } else {
            message = <div> Hello React  </div>
        }
        return <div>{message}</div>
    }
}

class TernarryConditionalRendering10 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            islogged: true
        }
    }

    render() {
        return (
            this.state.islogged ?
                <div>  Hey PRCV </div> :
                <div> Hello React  </div>
        )
    }
}

class ShortCircuitConditionalRendering10 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            islogged: true
        }
    }

    render() {
        return this.state.islogged && <div>  Hey PRCV </div>
    }

}



export { IfElseConditionalRendering10, ElementConditionalRendering10, TernarryConditionalRendering10, ShortCircuitConditionalRendering10 }
