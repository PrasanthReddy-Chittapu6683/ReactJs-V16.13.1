import React from 'react'

export default function MethodsAsPropsChild9(props) {
    return (
        <div>
            <button onClick={() => props.fromParent('Child comp button click event')}>Am in Child comp</button>
        </div>
    )
}
