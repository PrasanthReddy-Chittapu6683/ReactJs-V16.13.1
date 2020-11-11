import React, { Component } from 'react'
import { UserConsumer, ThemeConsumer } from './MainContext25'

class ComponentF25 extends Component {
    render() {

        return (
            <ThemeConsumer>
                {
                    (mytheme) => (
                        <UserConsumer>
                            {
                                (myname) => {
                                    return <div> ComponentF25 :-  MyNmae : <b> {myname}  </b> & MyTheme: <b> {mytheme}</b>. (Displaying this name using `UserConsumer` declared in MainContext25.js file and name we passing in App.js file wrapping arond `ConponentC25`)</div>
                                }
                            }
                        </UserConsumer>
                    )}
            </ThemeConsumer>


        )
    }
}

export default ComponentF25
