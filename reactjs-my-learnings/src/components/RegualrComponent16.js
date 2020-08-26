import React, { Component } from 'react'

class RegualrComponent16 extends Component {
    render() {
        console.log("REgular Component")
        return (
            <div>
                <b> Inside Regular Component
                    <small>
                        {this.props.name}
                    </small>
                </b>
            </div>
        )
    }
}

export default RegualrComponent16
