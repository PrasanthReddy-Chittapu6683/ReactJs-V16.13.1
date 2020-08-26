import React from 'react'

export default function MethodsAsPropsChild9(props) {
    const {prcv, fromParent} = props; // Destructuring
    return (
        <div>
            Passing this data from Parent to Child `{prcv}`
            <button onClick={() => fromParent('Child comp button click event')}>Am in Child comp</button>
        </div>
    )
}
