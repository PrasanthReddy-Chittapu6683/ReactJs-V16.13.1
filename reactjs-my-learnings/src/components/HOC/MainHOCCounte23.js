import React from "react";

const MainHOCCounteWrapper23 = (WrappedComponent, incrementNumber) => {
    class MainHOCCounteClass extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }



        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}
            ></WrappedComponent>
        }
    }
    return MainHOCCounteClass
}

export default MainHOCCounteWrapper23