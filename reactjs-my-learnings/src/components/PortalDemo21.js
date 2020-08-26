import React from 'react'
import ReactDOM from 'react-dom'
// import styles from '../myStyles.module.css'

function PortalDemo21() {
    return ReactDOM.createPortal(
        <div style={{
            color: "Highlight", fontSize: 15, backgroundColor: "ActiveCaption", fontWeight: "bolder"
        }}> <i> Portals Component which is loading outside the 'root' element unde 'portal-root' tag</i> </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo21
