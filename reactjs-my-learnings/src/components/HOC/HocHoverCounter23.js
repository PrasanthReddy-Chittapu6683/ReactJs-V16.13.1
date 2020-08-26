import React, { Component } from 'react'
import MainHOCCounte23 from './MainHOCCounte23'


class HocHoverCounter23 extends Component {


    render() {
        const { count, incrementCount } = this.props;
        return (
            <div style={{ backgroundColor: "Highlight" }} onMouseOver={incrementCount}>
                <h3>  No of times hover: {count}</h3>
            </div>
        )
    }
}

export default MainHOCCounte23(HocHoverCounter23, 10)
