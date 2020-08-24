import React from 'react';
import FunctionalComponent from './components/FunctionalComponentOne'
import { NamedExportComponent } from './components/FunctionalComponentOne'
import ClassComponentTwo from './components/ClassComponentTwo'
import { JSXReturn, JavaScriptReturn } from './components/JSX-JS-DiffThree'
import { PropsFunctinalComponent, PropsUsingClassComponent } from './components/PropsFour';
import StateExampleFive from './components/stateExampleFive';
import SetStateExampleSix from './components/SetStateExampleSix'
import { DestructuringPropsStatesFunComp, DestructuringPropsStatesClassComp, DestructuringPropsStatesFunCompOtherway } from './components/DestructuringPropsStates7'
import { EventHandlingClassComp, EventHandlingFunctinalComp } from './components/EventHandling8'
import MethodsAsPropsParent9 from './components/MethodsAsPropsParent9'
import './App.css';

// class App extends Comment {
//   render() {
//     return (
//       <div className="App">
//         <FunctionalComponent></FunctionalComponent>
//       </div>

//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <h1 >
        React JS Tutorial
      </h1>
      <ul>
        <li>
          <h2>Functional Components:</h2>
          <FunctionalComponent></FunctionalComponent>
          <NamedExportComponent></NamedExportComponent>
        </li>
        <li>
          <h2> Class Components:</h2>
          <ClassComponentTwo></ClassComponentTwo>
        </li>
        <li>
          <h2> JSX & JavaScript Return Functions difference: </h2>
          <small><i>JavaScript XML (JSX) is an extension to the JavaScript language syntax. With React, it's an extension to write XML-like code for
            elements and components. And just like XML, JSX tags have a tag name, attributes, and children.</i></small>
          <JSXReturn></JSXReturn>
          <JavaScriptReturn></JavaScriptReturn>
        </li>
        <li>
          <h2>props:</h2>
          <small>
            <i> -- props short for properties, is the optional input that your component can accept.
              It also allows the component content to be dynamic.</i><br />
            <i>
              -- Here am using component 3 time to print the same text with different name.
            </i>
          </small>
          <h4> Props Using Functional Component </h4>
          <PropsFunctinalComponent name='PRCV' turotrialName="React"> </PropsFunctinalComponent>
          <PropsFunctinalComponent name='Reddy' turotrialName="Angular"></PropsFunctinalComponent>
          <PropsFunctinalComponent name='CV' turotrialName="Java Script">
            <button> This is children props HTML element using `props.children`</button>
          </PropsFunctinalComponent>
          <PropsFunctinalComponent name='Tanz' turotrialName="Vue">
            <p>
              This is children props HTML element using `props.children`
          </p>
          </PropsFunctinalComponent>
          <h4> Props Using Class Component </h4>

          <PropsUsingClassComponent name='PRCV' turotrialName="React"> </PropsUsingClassComponent>
          <PropsUsingClassComponent name='Reddy' turotrialName="Angular"></PropsUsingClassComponent>
          <PropsUsingClassComponent name='CV' turotrialName="Java Script">
            <button> This is children props HTML element using `props.children`</button>
          </PropsUsingClassComponent>
          <PropsUsingClassComponent name='Tanz' turotrialName="Vue">
            <p>
              This is children props HTML element using `props.children`
          </p>
          </PropsUsingClassComponent>


        </li>
        <li>
          <h2> State: </h2>
          <StateExampleFive></StateExampleFive>
        </li>
        <li>
          <h2>Set State: </h2>
          <SetStateExampleSix ></SetStateExampleSix>
        </li>
        <li>
          <h2>Destructuring props & state: </h2>
          <h4> Using Functional Component </h4>
          <DestructuringPropsStatesFunComp name='PRCV' turotrialName="React"></DestructuringPropsStatesFunComp>
          <DestructuringPropsStatesFunCompOtherway name='Reddy' turotrialName="React"> </DestructuringPropsStatesFunCompOtherway>
          <h4> Using Class Component </h4>
          <DestructuringPropsStatesClassComp name='PRCV' turotrialName="React"></DestructuringPropsStatesClassComp>
        </li>
        <li>
          <h2>Event Handling: </h2>
          <h4> Using Functional Component </h4>
          <EventHandlingFunctinalComp></EventHandlingFunctinalComp>
          <h4> Using Class Component </h4>
          <EventHandlingClassComp></EventHandlingClassComp>
        </li>
        <li>
          <h2>Methods as Porps: </h2>
          <MethodsAsPropsParent9></MethodsAsPropsParent9>
        </li>
      </ul>

    </div>
  );
}

export default App;
