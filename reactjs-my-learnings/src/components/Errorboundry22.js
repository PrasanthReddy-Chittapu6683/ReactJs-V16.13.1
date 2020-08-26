import React, { Component } from 'react'

class Errorboundry22 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            errorMsg: ''
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log("^^^^^^^^^^^^")
        console.log(error)
        console.log("^^^^^^^^^^^^")
        console.log("^^^^^^^^^^^^")
        console.log(info)
        console.log("^^^^^^^^^^^^")
        this.setState({
            errorMsg: error.message
        })

    }

    render() {
        if (this.state.hasError) {
            return <div style={{ color: "orangered", fontStyle: "italic" }}>
                Error occured comment    heroName="Joker" is not allowed
             <span style={{ fontSize: 25 }}>
                    {this.state.errorMsg}
                </span>
            </div>
        }
        return this.props.children
    }
}

export default Errorboundry22
