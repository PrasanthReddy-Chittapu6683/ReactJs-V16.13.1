import React from 'react'

const ForwardRefComponent20 = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div >
    )
})


// function ForwardRefComponent20() {
//     return (
//         <div>
//             <input type='text'  />
//         </div>
//     )
// }

export default ForwardRefComponent20
