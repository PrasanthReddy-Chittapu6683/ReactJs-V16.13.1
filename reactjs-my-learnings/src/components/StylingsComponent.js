import React from 'react'
import './myStyle.css'
import styles from '../myStyles.module.css'

function StylingsComponent() {
    return (
        <div>
            <span>
                <h1 className="primary">
                    This is from Sytling component
                  </h1>
                <b>Conditionally Applying css class in child component using PROPS:</b>
                <ConditionalRenderingStylingsComponent primary={true}></ConditionalRenderingStylingsComponent>


            </span>
        </div>
    )
}


function ConditionalRenderingStylingsComponent(props) {
    const className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>
                Conditionally displaying this message using props 'true/false' flag.
            </h1>
            <b> Using Template literals display bigger font :</b>
            <span className={`${className} font-xl`}>
                This is displaying using Template Literals
            </span>
            <InlineStylingsComponent></InlineStylingsComponent>
        </div>
    )
}

function InlineStylingsComponent() {
    const stylesObj = {
        fontSize: '50px',
        color: 'blue'
    }
    return (
        <div>
            <b>Using Inline Stylings:</b>
            <h1 style={stylesObj}>We are applying Inline styles using Object in React</h1>

            <ModuleCssStylingsComponent></ModuleCssStylingsComponent>
        </div>
    )
}


function ModuleCssStylingsComponent() {
    return (
        <div>
            <b>Using Module CSS Stylings:</b>
            <div className={styles.danger}>
                Error messages  
            </div>
            <div className={styles.success}>
                Success messages
            </div>
        </div>
    )
}







export { ConditionalRenderingStylingsComponent, StylingsComponent, InlineStylingsComponent, ModuleCssStylingsComponent }


