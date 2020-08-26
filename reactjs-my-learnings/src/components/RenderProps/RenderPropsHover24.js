import React, { Component } from 'react'

export class RenderPropsHover24 extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h4 style={{ backgroundColor: "Highlight" }} onMouseOver={incrementCount}>
                    Clicked {count} Times
                </h4>
                
            </div>
        )
    }
}

export default RenderPropsHover24

