import React, { Component } from 'react'
import ComponentE25 from './ComponentE25'
import { ThemeConsumer } from './MainContext25'

class ComponentC25 extends Component {
    render() {
        return (

            <ThemeConsumer>
                {
                    (theme) => {
                        return <div><b> ComponentC25 Theme Content -   {theme}</b>
                            <ComponentE25></ComponentE25>
                        </div>
                    }
                }


            </ThemeConsumer>


        )
    }
}
export default ComponentC25
