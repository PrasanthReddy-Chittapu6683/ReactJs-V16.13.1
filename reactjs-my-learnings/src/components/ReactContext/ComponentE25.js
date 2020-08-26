import React, { Component } from 'react'
import ComponentF25 from './ComponentF25'
import UserContext from './MainContext25'

class ComponentE25 extends Component {
    render() {
        return (
            <div>
                ComponentE25 Context :- {this.context}
                <ComponentF25></ComponentF25>
            </div>
        )
    }
}
ComponentE25.contextType = UserContext

export default ComponentE25
