import React from 'react'

function MemoComponent17(props) {
    const { name } = props;
    console.log("In Functional MEMO Component Log : -------------------" + name +" ------------------- (This renders only once because there is no change in the state). ")
    return (
        <div>
            <span> In Functional MEMO Component </span>
        </div>
    )
}

export default React.memo(MemoComponent17)
