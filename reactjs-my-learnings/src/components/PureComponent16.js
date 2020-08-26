import React, { PureComponent } from 'react'

class PureComponent16 extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <div>
                <b> This is from Pure component
                    <small>
                        {this.props.name}
                    </small>
                </b>
            </div>
        )
    }
}

export default PureComponent16
