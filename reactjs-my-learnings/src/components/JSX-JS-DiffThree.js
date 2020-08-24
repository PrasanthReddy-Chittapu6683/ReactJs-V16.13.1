import React from 'react';

export const JSXReturn = () => {
    return (
        <div className="dummyClass">
            <p> This is from JSX retrun function.</p>
        </div>
    )
}


export const JavaScriptReturn = () => {
    return React.createElement('div',
        { id: 'PRCV', className: 'dummyClass' },
        React.createElement(
            'b',
            null,
            "This is from JavaScript return function: Inspect this line for added the attributesfor this element"));
}
// export { JSXReturn, JavaScriptReturn };
