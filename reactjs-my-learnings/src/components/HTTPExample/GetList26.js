import React, { Component } from 'react'
import axios from 'axios'

class GetList26 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {

    }
    getData = url => {
        axios.get(url).then(response => {
            this.setState({
                posts: response.data,
                errorMsg: ''
            })
        }).catch(error => {
            this.setState({
                errorMsg: ' Error while fetcing data'
            })
        })
    }
    btnViewClick = () => {
        this.getData('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            posts: [],
            errorMsg: ''
        })
    }
    btnErrorClick = () => {
        this.getData('https://jsonplaceholder.typicode.com/posts1')
        this.setState({
            posts: []
        })

    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <button onClick={this.btnViewClick}> View data </button>
                <button onClick={this.btnErrorClick}> View error while Fecthing</button>
                List of Records using GET call: Total Items: {posts.length ? posts.length : 0}

                {
                    posts.length ?
                        posts.map(data => <ul key={data.id}>
                            <li>
                                {data.title}
                            </li>
                        </ul>) : null
                }
                {
                    errorMsg ? <h2 style={{ color: 'orangered' }}> {errorMsg}</h2> : null
                }
            </div>
        )
    }
}

export default GetList26
