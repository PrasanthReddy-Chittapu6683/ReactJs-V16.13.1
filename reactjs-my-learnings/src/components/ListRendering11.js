import React from 'react'

export default function ListRendering11() {
    const names = ['Prasant', 'PRCV', 'REDDY'];
    const nameList = names.map((val, index) => <li key={val.toString()}>{index + 1} : {val} </li>)

    const personDetails = [
        {
            name: 'prcv',
            age: 'gsdf',
            id: 45
        },
        {
            name: 'REREW',
            age: 'asas',
            id: 12
        }, {
            name: 'DSDAD',
            age: 'bcvby',
            id: 34
        }
    ];
    const personList = personDetails.map((per, index) => (<MapListRendering11 key={per.id.toString()} person={per} index={index + 1}></MapListRendering11>))
    return (
        <div>
            <b> Using map() function: </b>
            <ul>
                {nameList}
            </ul>
            <b>map() using another component:</b>
            <ul>
                {personList}
            </ul>

        </div>
    )
}


function MapListRendering11(props) {
    const { person, index } = props; // Destructuring

    return (
        <div>
            <li>
                <i>

                    {index} :  Hey I Am {person.name}, Age is {person.age} and ID is {person.id}
                </i>
            </li>
        </div>
    )
}

export { ListRendering11, MapListRendering11 }
