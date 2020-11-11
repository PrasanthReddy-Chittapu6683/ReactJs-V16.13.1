import React, { Component } from 'react'

class RenderPropsClick24 extends Component {

      
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                    Hoverd {count} Times
                </button>
            </div>
        )
    }
}

export default RenderPropsClick24
