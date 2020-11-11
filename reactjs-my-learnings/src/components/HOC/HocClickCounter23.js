import React, { Component } from 'react'
import MainHOCCounteWrapper23 from './MainHOCCounte23'

class HocClickCounter23 extends Component {

    render() {

        const { count, incrementCount } = this.props;
        return (
            <div>
                <button
                    onClick={incrementCount}>
                    {this.props.name} - Clicked {count} times
                </button>
            </div>
        )
    }
}

export default MainHOCCounteWrapper23(HocClickCounter23, 5)
