import React, { Component } from 'react'

function DestructuringPropsStatesFunComp({ name, turotrialName }) {
    return (
        <div>
            Hey <b> {name}</b>,This is DestructuringPropsStatesFunComp Component for Props <b>{turotrialName}</b>
        </div>
    )
}

function DestructuringPropsStatesFunCompOtherway(props) {
    const { name, turotrialName } = props;
    return (
        <div>
            Hey <b> {name}</b>,This is DestructuringPropsStatesFunComp Component for Props another way to do in  <b>{turotrialName}</b>
        </div>
    )
}




class DestructuringPropsStatesClassComp extends Component {

    render() {
        const { name, turotrialName } = this.props;
        // const { state1, state2 } = this.state;
        return (
            <div>
                Hey <b> {name}</b>,This is DestructuringPropsStatesClassComp Component for Props <b>{turotrialName}</b>
            </div>
        )
    }
}

export {
    DestructuringPropsStatesClassComp,
    DestructuringPropsStatesFunComp,
    DestructuringPropsStatesFunCompOtherway
}
