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
import { ElementConditionalRendering10, IfElseConditionalRendering10, TernarryConditionalRendering10, ShortCircuitConditionalRendering10 } from './components/ConditionalRendering10'
import ListRendering11 from './components/ListRendering11'
import { StylingsComponent } from './components/StylingsComponent'
import FormHandling from './components/FormHandling12'
import LifeCycleA from './components/MountingLifeCycleA13'
import UpdateLifeCycleA from './components/UpdatingLifeCycleA14'
import FragmentDemo15 from './components/FragmentDemo15'
import FragementDemoTable15 from './components/FragementDemoTable15'
// import PureComponent16 from './components/PureComponent16'

import './App.css';
// import RegualrComponent16 from './components/RegualrComponent16';
import ParentComponent16 from './components/ParentComponent16';
import MemoParentComponent17 from './components/MemoParentClassComponent17';
import RefsDemo18 from './components/RefsDemo18';
import FocusInput19 from './components/FocusInput19'
import ForwardRefParentComponent20 from './components/ForwardRefParentComponent20'
import PortalDemo21 from './components/PortalDemo21';
import ErrorHandling22 from './components/ErrorHandling22';
import Errorboundry22 from './components/Errorboundry22';
import HocClickCounter23 from './components/HOC/HocClickCounter23';
import HocHoverCounter23 from './components/HOC/HocHoverCounter23';
import RenderPropsClick24 from './components/RenderProps/RenderPropsClick24';
import RenderPropsHover24 from './components/RenderProps/RenderPropsHover24';
// import MainRenderProps24 from './components/RenderProps/MainRenderProps24';
import CommonSharedRenderProps24 from './components/RenderProps/CommonSharedRenderProps24';
import ComponentC25 from './components/ReactContext/ComponentC25'
import { UserProvider, ThemeProvider } from './components/ReactContext/MainContext25';
import GetList26 from './components/HTTPExample/GetList26';
import PostForm26 from './components/HTTPExample/PostForm26';



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
        <li>
          <h2>Conditional Rendering: </h2>
          <b>   IF/Else:</b>
          <IfElseConditionalRendering10></IfElseConditionalRendering10>
          <b>  Element Varibale:</b>
          <ElementConditionalRendering10></ElementConditionalRendering10>
          <b>  Ternary Operator:</b>
          <TernarryConditionalRendering10></TernarryConditionalRendering10>

          <b>  Ternary Operator:</b>
          <ShortCircuitConditionalRendering10></ShortCircuitConditionalRendering10>
        </li>
        <li>
          <h2>List Redering</h2>
          <ListRendering11></ListRendering11>
        </li>
        <li>
          <h2>Stylings in CSS</h2>
          <StylingsComponent></StylingsComponent>
        </li>
        <li>
          <h2>Form Handling</h2>
          <FormHandling></FormHandling>
        </li>
        <li>
          <h2>MOUNTING:  Life Cycle Methods</h2>
          <LifeCycleA></LifeCycleA>
        </li>
        <li>
          <h2>UPDATIG: Life Cycle Methods</h2>
          <UpdateLifeCycleA></UpdateLifeCycleA>
        </li>
        <li>
          <h2>React Fragment</h2>
          <FragmentDemo15></FragmentDemo15>
          <h2> React Fragments using multiple Components</h2>
          <FragementDemoTable15></FragementDemoTable15>
        </li>
        <li>
          <h2> Pure Component Example</h2>

          <ParentComponent16></ParentComponent16>
        </li>
        <li>
          <h2> Memo Component Example</h2>
          <small>Check console that logs the component rending </small>
          <MemoParentComponent17></MemoParentComponent17>
        </li>
        <li>
          <h2> Refs Example </h2>
          <small> Using this.inputRef = React.createRef() we are setting the focus on the textbox. Check
            console.log for what data is present inside the `this.inputRef` </small>
          <RefsDemo18></RefsDemo18>
        </li>

        <li>
          <h2> Refs With Class Components Example </h2>
          <small> Here we are created 2 components parent and child. on clicking on button in parent component we are setting the focus in child component textbox. </small>
          <FocusInput19></FocusInput19>
        </li>
        <li>
          <h2> Forwarding Refs Example </h2>
          <small>  </small>
          <ForwardRefParentComponent20></ForwardRefParentComponent20>
        </li>
        <li>
          <h2> Poratls Demo </h2>
          <small> Check in the inspect Elements below PortalDemo21 component load inside the 'portal-root' div element </small>
          <PortalDemo21></PortalDemo21>
        </li>
        <li>
          <h2>Error Handling </h2>
          <small> To view the error add heroName="Joker" in App.js file  </small>
          <Errorboundry22>
            <ErrorHandling22 heroName="Batman"></ErrorHandling22>
          </Errorboundry22>

          <Errorboundry22>
            <ErrorHandling22 heroName="IronMan"></ErrorHandling22>
          </Errorboundry22>

          {/* <Errorboundry22>
            <ErrorHandling22 heroName="Joker"></ErrorHandling22>
          </Errorboundry22> */}
        </li>
        <li>
          <h2> Higher Order Components (HOC)</h2>
          <small>Here we are incrementing the count when doing button click and mouse over on div using common HOC for both button Component and mouseover component</small>
          <HocClickCounter23 name='prcv'></HocClickCounter23>
          <HocHoverCounter23></HocHoverCounter23>
        </li>

        <li>
          <h2> Render Props</h2>
          <small>This is another way to share the data to components.</small>
          {/* <RenderPropsClick24></RenderPropsClick24>
          <RenderPropsHover24></RenderPropsHover24>
          <MainRenderProps24 render={(isLoggedin) => isLoggedin ? 'PRCV' : 'Guest'} ></MainRenderProps24> */}
          <CommonSharedRenderProps24
            render={(count, incrementCount) =>
              <RenderPropsClick24 count={count} incrementCount={incrementCount}></RenderPropsClick24>
            }>
          </CommonSharedRenderProps24>
          <CommonSharedRenderProps24
            render={(count, incrementCount) =>
              <RenderPropsHover24 count={count} incrementCount={incrementCount}></RenderPropsHover24>
            }>
          </CommonSharedRenderProps24>
          <small> Other way of using function parameters - check the commented the code in App.js</small>
          {/* <CommonSharedRenderProps24>
            {(count, incrementCount) => (
              <RenderPropsHover24 count={count} incrementCount={incrementCount}></RenderPropsHover24>
            )}
          </CommonSharedRenderProps24> */}

        </li>
        <li>
          <h2>React Context</h2>
          <ThemeProvider value='Ligh Dark theme'>
            <UserProvider value='PRCV'>
              <ComponentC25></ComponentC25>
            </UserProvider>
          </ThemeProvider>
        </li>
        <li>
          <h2>HTTP GET Services</h2>
          <GetList26></GetList26>
        </li>
        <li>
          <h2>HTTP POST Services</h2>
          <PostForm26></PostForm26>
        </li>
      </ul>

    </div>
  );
}

export default App;
