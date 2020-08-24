import React, { Component } from 'react'

const PropsFunctinalComponent = (props) => {

    return (<div> Hi
        <b> {props.name}</b>,
         This is displaying using the name attribute in HTML and reading using `props` in component using
        <b> {props.turotrialName} </b>
        {props.children}
    </div>);
}

class PropsUsingClassComponent extends Component {

    render() {
        return (<div> Hey {this.props.name},This is Prop Class Component in {this.props.turotrialName} 
          { this.props.children }
        </div>
      
        )
    }

}

export {
    PropsUsingClassComponent, PropsFunctinalComponent
}