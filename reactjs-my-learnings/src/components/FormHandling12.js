import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'prcv',
            desc: '',
            dept: 'Angular'
        }
    }
    usernameChangeevent = event => {
        this.setState({
            username: event.target.value
        })

    }
    descChangeEvent = event => {
        this.setState({
            desc: event.target.value
        })
    }
    deptChangeEvent = event => {
        this.setState({
            dept: event.target.value
        })
    }
    submitClick = event => {
        alert(`${this.state.username} - ${this.state.desc} - ${this.state.dept}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitClick}>
                    <div>
                        <label> Username:</label>
                        <input type="text" value={this.state.username} onChange={this.usernameChangeevent}></input> {this.state.username11}
                    </div>
                    <div>
                        <label> Description:</label>
                        <textarea value={this.state.desc} onChange={this.descChangeEvent}></textarea>
                    </div>
                    <div>
                        <label>Department</label>
                        <select value={this.state.dept} onChange={this.deptChangeEvent}>
                            <option value="Angular">Angular</option>
                            <option value="React">React</option>
                            <option value="TypeScript">TypeScript</option>
                        </select>
                    </div>
                    <div>
                        <button > Form Submit</button>
                        <button onClick={this.submitClick}> Normal Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormHandling
