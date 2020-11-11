import React, { Component } from 'react'
import MainHOCCounteWrapper23 from './MainHOCCounte23'


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

export default MainHOCCounteWrapper23(HocHoverCounter23, 10)
