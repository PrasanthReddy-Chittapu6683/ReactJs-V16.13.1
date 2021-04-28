## What is React?
    * Open source library for building the User interfaces
    * Its not a framework.
    * Focus only on UI which can build only Rich HTML interfaces.
    * Rich Ecosystem: To build Routing, Http services react will support to import the library's.
    * It's a Component Based Architecture
    * React is declaritive
    * React can integrative with any other page like Angular or Veu.js.

<a name="Prerequiste"></a>
## Prerequiste for React JS :
  * JavaScripts:
    * `this` keyword, filter, map and reduce
  * ES6+:
    * __let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructing assignment__
<a name="new_ReactJS"></a>
## Create new React JS Application:
    * __`npx create-react-app reactJs0816`__  (or) 
        * `npm install create-react-app -g`
        * `create-react-app <project-nameXXXXX>`
    * This will create new application of ReactJs modules inside reactJs0816 folder
    * `npx` is the npm package runner when we install npm
    * `npm start` 
    * This will run the application on default port 3000

 
<a name="Folder_Structure"></a>
## Folder Structure:
    * package.json:
        It contains dependencys of the projects
        Helps to run and install the application.
    * public:
        It contails 3 files.
            manifest.json -> It conserned about progressive webapps
            index.html -> This is the only 1 html file will have in our application(SPA). View will dynamically generates using this file.
                          Mostly will not do any changes in this file.
                          React want control UI so it will have 1 tag <div id='root'></div> 
                          Runtime react take this div tag and its responsible to UI
    * src:
        - Will Create all our Components in this folder.
        - By default it will create some files inside this.
        - Starting point of our application is index.js
        - index.js:
            - In this we specify the root Component ie., `App` Component & DOM element (`root' which is the id in index.html) which will be controller by react
                Ex:
                    ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));
                    This will render the HTML in root id div tag which ever we repersent in App Component(App.js file).
        - App.js:
            - It responsible to display the HTML in browser
        - App.css:
            - Helps to repersent the sytles
        - App.test.js:
            - Helps to write Unit test cases.
        - serviceWorker.js:
            - This is responsible for progressive webapps.

<a name="Rending_React"></a>
## Rending the React appliction in Browser:
    * When we run the `npm start ` command:
        - index.html file will serve in the browser. This file contails div tag with `root` id
        - Next it wil enters in to index.js. ReactDOM renders the App Component in to `root` node
        - App.js (AppComponent) contains HTML which display's in browser.

<a name="Component"></a>
## What is Component?
    * In React we have main root Component ie., App Component (App.js) 
    * In React 1 Component contain other Component.
    * Reusable
    * Component code place the code in JavaScript file(App.js). We can have Component with .JSX file extensions.
    * We have two different types of Components:
        1) Stateless Functional Component:
            *  This are JavaScript functions.
            * It returns HTML code to display in UI
                Ex:
                ``` javascript
                    function welcome(props) {
                        return `<h1> Hello, {props.name} </h1>
                    }
                ```
        2) Stateful Class Component:
            * Its a regular ES6 class that extends `React.Component` class.
            * `render` method is manditory to return HTML.
                Ex:
                ``` javascript
                    class welcome extends React.Component {
                        render()  {
                            return `<h1>Hi PRCV</h1>`;
                        }
                    }
                ```
<a name="Functional_Components"></a>
## Functional Components:(Stateless / Dumb / Presentational Components)
    * These are just JavaScript function.
    * They can optonally receive the input Properties called as `props` and returns the output as HTML(JSX).
    * Need to use mostly Functional Components. 
    * Advantage of the Functional Component over Class Component is `this` keyword will not be there.
    * Wth out using the `State` we can develop the application
    * Mainly responsible for UI
    Refer: FunctionalComponentOne.js
    
<a name="Version_React"></a>
## Version React 16.7+:
    * From this version, Functional Components are no more Stateless Components. They introduced HOOKS. 
    * States & HOOKS can use in the Functional Components aswelll.
    * This makes more easier than Class Components

<a name="ClassComponents"></a>
## Class Components: (Stateful / Smart / Container) 
    * These are basically ES6 classes
    * It also receives the input Properties called as `props` and returns the output as HTML(JSX).
    * Apart from props, this class contains private Internal states(means, This class contains its private information which can use to display in the UI).
	* While creating the class Component we need to import two classes from react
       ``` javascript
        import React, {Component} from 'react';
      ```
    * Class should export Component
        ``` javascript
            class ClassComponentTwo extends Component {
            }
        ```
    * Class has to implement render() which returns null or HTML
    * There are bit more Feature Rich.
    * Here we can maintain thier own private data also called as `state`.
    * They can contain complex logics
    * It provides Life Cycle Hooks.
    Refer: ClassComponentOne.js



 <a name="JSX"></a>
## What is JSX (JavaScript XML) ?
    * Its an extention of JavaScript language syntax
    * We can write XML like code for elements and Components.
    * JSX tags have a tag name, attributes and Children.
    * JSX make react code simplier and easy.
    * JSX ultimately transpiles to pure JavaScript which is understood by the browsers.
    * In JSX some of the things got replaced compare the JavaScript ie.,
        - Class => className
        - for => htmlFor
        - camelCase prorperty naming convention
           * onclick => onClick
           * tabindex => tabIndex 
    Refer: FunctionalComponentOne.js
        JSX Syntax:
            ``` javascript
              return (
                  <div className="dummyClass">
                      <p> This is from JSX retrun function.</p>
                  </div>
                )
            ```
        JavaScript Syntax:
          ``` javascript
             return React.createElement('div',
                { id: 'PRCV', className: 'dummyClass' },
                React.createElement(
                    'b',
                    null,
                    "This is from JavaScript return function: Inspect this line for added the attributesfor this element"));
          ```
<a name="props"></a>
## Props (Properties):
    * Compoents are reusable by importig Compoent from 'react'
    * Props are optional input that Compoent can accept.
    * Props can allows the Compoent to be dynamic.
    * Props is readonly property. Cannot change or assign the value in Component class.
    Refer: PropsFour.js
        Ex:
            In HTML add the attributes:
             <PropsComponent name='PRCV'></PropsComponent>
            In Compoents add the parameters to the class `props`. In `props` will have HTML element attribute details
              ```javascript 
                const PropsComponent = (props) => {
                    return <div> Hi <b> {props.name}</b>,This is displaying using the name attribute in HTML and reading using `props` in component : </div>
                }
              ```
    * Using props, we can read the child element which is inside the component class name element
        Ex:
            Html:
               ```javascript
                 <PropsComponent name='Tanxz' turotrialName="Vue">
                    <p>
                        This is childern Props
                    </p>
                </PropsComponent>      
              ```
            Compoent Class:
              ```javascript
                const PropsComponent = (props) => {
                    return (<div> Hi
                        <b> {props.name}</b>,
                        This is displaying using the name attribute in HTML and reading using `props` in component using
                        <b> {props.turotrialName} </b>
                        {props.children}
                    </div>);
                }
              ```

<a name="state"></a>
## State: 
    * State is managed with in the components.
    * variables declared in the function body
    * state is managed with in the component and having full control that can be changed ie., State is mutable.
    * Functional Compoents: useState Hook.
    * Class Compoents: this.state.
    * this.state can be used only in costructor to initialize the value or property.
    Refer: stateExampleFive.js

<a name="setState"></a>
## setState:
    * This is used to update or change the value of state using setState function
        Ex:
             this.setState({
                count: this.state.count + 1
            })
    * Suppose, if we want to update any code after executing the setState method, we have two parameters in setState   
        1st parameter: to set the values
        2nd parameter: set callback
        Ex:
            this.setState({
                count: this.state.count + 1
            },
                ()=> {
                    console.log('Call Back')
                }
            )
    * If we add multiple setState() objects it will group to single setState() object while executing.
        Ex:
             IncFive = () => {
                this.IncFiveTimes();
                this.IncFiveTimes();
                this.IncFiveTimes();
                this.IncFiveTimes();
                this.IncFiveTimes();
            }
    * If we need to call and execute inside code all 5 times we need to pass an argument instead of regular object, below syntax:
        Ex:
             IncFiveTimes = () => {
                this.setState(prevState => ({
                    count: prevState.count + 1
                }))
            }

<a name="Destructing"></a>
## Destructing props and state:
    * Inn ES6 we can destructing the props and states objects
    * Destructing impoves code readiability
    * Destructing by passing the parameter, instead of using props in FunctionalComponents
        Ex:const destructing = ({name,heroName }) => {
            retrun(
                <div>
                    Hi {name} from {heroName}
                </div>
            )
        }
    Refer: DestructuringPropsStates7.js

    
<a name="Event_Handling "></a>
## Event Handling:
    *  render() {
            return (
                <div>
                    <button onClick={() => this.onclickeve()}>click</button>
                    <div>{this.state.message}</div>
                </div>
            )
         }

        onclickeve = () => {
            console.log("Hi, ClassComp Click event")
            this.setState({
                message :' Good bye'
            })
        }
    Refer: EventHandling8.js

<a name="Methods_as_props"></a>
## Methods as props:
    * How to pass data or call the function from child  copoment to parent component using props?
    Refer: MethodsAsPropsParent9.js
           MethodsAsPropsChild9.js

<a name=" Conditional_Rending"></a>
## Conditional Rending:
    * if/else
        - Ex:
             render() {
                if (this.state.islogged) {
                    return <div>  Hey PRCV </div>
                }
                else {
                    return <div> Hello React  </div>
                }
            }
        - Disadvantage of tis approach is we cannot use if else in HTML/JSX, we need to repeat the return statement.
    * Element variables
        - Here we use JavaScript variables to store elements. It helps to render Conditionally enire component or part of the componet.
        - Ex:
            render() {
                let message
                if (this.state.islogged) {
                    message = <div>  Hey PRCV </div>
                } else {
                    message = <div> Hello React  </div>
                }
                return <div>{message}</div>
            }

    * Ternary Conditional operators
        - It can be used inside the JSX/HTML
        Ex: render() {
                return (
                    this.state.islogged ?
                        <div>  Hey PRCV </div> :
                        <div> Hello React  </div>
                )
            }
    * Short circuit operators
        - When want to render something or nothng will use this.
        - Ex:  render() {
                    return this.state.islogged && <div>  Hey PRCV </div>
                }

<a name="List_Rendering"></a>
## List Rendering:
    * map()
        - Ex:
            const names = ['Prasant', 'PRCV', 'REDDY'];
            const nameList = names.map((val, index) => <li key={val.toString()}>{index + 1} : {val} </li>)
            return (
                <div>
                    <b> Using map() function: </b>
                    <ul>
                        {nameList}
                    </ul>
                </div>
            )
    Refer:ListRendering11.js

<a name="Styling_React_Compoents "></a>
## Styling React Compoents:
    * CSS stylesheets
    * Inline Styling:
        Ex: 
            const stylesObj = {
                fontSize: '50px',
                color: 'blue'
            }
            return (
                <div>
                    <b>Using Inline Stylings:</b>
                    <h1 style={stylesObj}>We are applying Inline styles using Object in React</h1>

                    <ModuleCssStylingsComponent></ModuleCssStylingsComponent>
                </div>
            )
    * CSS modules  
        - This feature is availble in react 2+
        - file name must suffix with module  Ex: appStyle.module.css
        - normatl css class styles will automatically applys in child components also(which conflict), so we use CSS modules to overcome this.
    * CSS in JS Libaries
    Refer: StylingsComponent.js
           myStyle.css
           myStyle.module.css

<a name="Form_Handling"></a>
## Form Handling:  
    * TextBox:
        Ex:  <input type="text" value={this.state.username} onChange={this.usernameChangeevent}></input>
            usernameChangeevent = (event) => {
                this.setState({
                    username: event.target.value
                })
            }
    * Select dropdown:
        Ex:
            <select value={this.state.dept} onChange={this.deptChangeEvent}>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
                <option value="TypeScript">TypeScript</option>
            </select>

<a name="Lifecycle_Methods"></a>
## Component Lifecycle Methods:
    * For Functional Component we use HOOKS for the life Cycle
    * There are totatl four life cycle methods:
        - Mounting
            - When an instance od a omponent is being created and insertd into the DOM
            - In this stage we have 4 methods:
                1) constructor(props):
                    * Its a special function that get called whenever a new component is created.
                    *  We can use this for initializing state & Binding the event handlers.
                    * We cannot use HTTP calls inside constructor.
                    * WE need call a special class function called `supre(props)`. This is the base class constructor.
                    * After calling the super(props) funcion we can access this.props
                    * Only in constructor we can able to modify the state using this.state. Outside the constructor we are going to use this.setState() only to update the existing state values.

                2) static getDerivedStateFromProps(props, state):
                    * It is used when the state of the component depends on changes in props over time
                    * We can use this function when the initial state of the component is depends on the props being passed to the  component. In that scenario we can use to set the STATE
                    * This is a static method so it doesnot have access to the `this` keyword.
                    * we can simply return the object of the new state to the component.
                    * We cannot use HTTP calls inside constructor.
                     
                3) render:
                    * Its mandatory method in the component.
                    * In this method we can read the props and state and return JSX/HTML.
                    * We should not change the state of the Compoent and interacting with DOM or making ajax calls.
                    * It contains other children components right after the parent render method, Children render methods are also executed.

                4) componentDidMount:
                    * THis called only once on the whole lifecycle of the given component.
                    * It invoked immediately after a component and all its children components have been rendered to the DOM.
                    * This is perfect place to initializing the required DOM nodes and also loads data by making network requests.
          
            Refer: MountingLifeCycleA13.js
                   MountingLifeCycleB13.js

        - Updating
            - When a component is being re-rendered as a reult of changesto either its props or state
            - In this stage we have 5 methods:
                1) static getDeriverdStateFromProps(props, state):
                    * Its a sttic method, which takes input as props and state and returns null or updated object that represents the state of the component.
                    * It will call every time when the component is re-rendered.
                    * This is used when the state depends on the props of the component.    

                2) shouldComponentUpdate(nextProps, nextState):
                    * This method receives updated props and states.
                    * It dectates the component should re-render or not.
                    * By default all class component will re-render whenever the props they receive or state got changed.
                    * This method can prevent by returning false.
                    * We can compare the exisiting props & state values with the next props & state values and return ture / false that component should update or not.

                3) render():
                    * Its mandatory method in the component.
                    * In this method we can read the props and state and return JSX/HTML.
                    * We should not change the state of the Compoent and interacting with DOM or making ajax calls.
                    * It contains other children components right after the parent render method, Children render methods are also 
                      executed. 

                4) getSnapshotBeforeUpdate(prevProps, prevState):
                    * This method receives previous props and previous state as a parameters and its called right before the changes from the virtual DOM are to be reflected in DOM.
                    * Capture some information of DOM       
                        -   Ex: like Capture the mouse postion in the browser, etc...
                    * This menthod return null or value. Returned  value will pass as a 3rd parameter to the next menthod componentDidMount()

                5) componentDidUpdate(prevProps, prevState, snapshot):
                    * This will call after the render is finished in re-render lifecycle.
                    * It will accept prevProps, prevState, snapshot
                    * We can make ajax calls, but before calling we need to compare the prevProps and newProps and then decide to make ajax call or not.
            Refer: UpdatingLifeCycleA14.js
                   UpdatingLifeCycleB14.js
        - Unmounting
            - When a component is beign remove from the DOM
                1) componentWillUnmount():
                    * It invoked immediately when the component is unmount or destroyed.
                    * We can perform some clean up task like removing network requests, removing event handlers etc..,.
                    * Should not do setState().

        - Error Handling
            - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
                1) static getDerivedStateFromError(error):
                2) componentDidCatch(error, info)
            - Above two methods will call when there is an error during renderign, in lifecycle method, or in the constructor of any child component.


<a name="ReactFragments"></a>
## React Fragments:
    * It let u group of childern elements without adding extra nodes to the DOM
    
        Ex:  render() {
                return (
                    <React.Fragment>
                        <h1>
                            Inisde Frangement Component
                        </h1>
                        <p> This describes Fragment demo</p>
                    </React.Fragment>
                )
            }
    * It can accept key attribute while rending the list:
        Ex: return (
                <React.Fragment>
                    {
                        items.map(item => (
                            <React.Fragment key={item.id}>
                                <h4> Title </h4>
                                <p>{item.title}</p>
                            </React.Fragment>
                        ))
                    }
                    <td>Name</td>
                    <td>PRCV</td>
                </React.Fragment>
            )
        Refer: FragmentDemo15.js
               FragementDemoTable15.js
               FragementDemoColumns15.js

<a name="PureCompoents"></a>
## Pure Compoents: (shotcut: rpce)
    * Usally Regular compoent we will extends from react.Component.
    * Now we have another way of creating component, ie., PureComponent class from react
    * Suppose if we setInterval for Regular component and Pure Component, only normal components will load every time because of setInterval.
       Pure Component will load only once.
    * Regular Component does not implement the `shoildComponentUpdate()` method. It always returns true by default.
    * Pure Component implements `shouldComponentUpdate` with a shallow props and state comparison.
    * Pure Components will do the Shallow Comparison with the prevState with currentState & prevProps with currentProps. It it is diffent then only it will re-render
    * Puer Components will work only with Class based components.
    Refer: PureComponent16.js
           REgularComponent16.js
           ParentComponent16.js 

<a name="Shallowcomparison"></a>
## Shallow comparison (SC):
    * Two types:
        1) Primitive types: strings, numbers etc..
            Ex: string 'PRCV' (SC) string 'PRCV' .it returns `true` 


        2) Complex types: objects
            Ex: var a = [1,2,3]
                var b = [1,2,3]
                var c = a;

                var ab_eq = (a === b) // retrun `false` because a & b reference object is different
                var ac_eq = (a === c) // retrun `true`  because a & b reference object is same
            Ex: var a = { x:1, y:2 }
                var b = { x:1, y:2 }
                var c = a;

                var ab_eq = (a === b) // retrun `false` because a & b reference object is different
                var ac_eq = (a === c) // retrun `true`  because a & b reference object is same

<a name="MEMO "></a>
## MEMO:
    * Pure Components will work only with Class based components.
    * Memo will work with Functional Compoents.
    * This got introduced in version 16.6 +
    Refer: MemoParentClassComponent17.js
           MemoFunctionalComponent17.js

<a name="refs "></a>
## Refs:
    * It helps to access the DOM node directly in react.   
        Ex: Suppose if we need to set focus on the textbox immediately once the page loads (like login forms)
            constructor(){
              this.inputRef = React.createRef()
            }
            componentDidMount() {
                    this.inputRef.current.focus();
                    console.log("*****REFS Obj*****")
               }
    * React Refs also supports callback Refs to focus on the elemets.
        Ex: 
            constructor(){
                this.cbRef = null;
                this.setCallbackRef = (element) => {
                    this.cbRef = element;
                }
            }
            componentDidMount() { 
                if (this.cbRef) {
                    this.cbRef.focus();
                    console.log("*****Callback REFS Obj*****")
                    console.log(this.cbRef)
                }
            }
<a name="RefswithClassComponents"></a>
## Refs with Class Components:
    Ex: RefswithClassComponents19.js
            constructor(props) {
                super(props)
                this.inputRef = React.createRef();
            }
            <input type="text" ref={this.inputRef} />
            focusInput = () => {
                    this.inputRef.current.focus();
            }
        FocusInput19.js
            constructor(props) {
                super(props)
                this.compoentRef = React.createRef();
            }
            clickHandler = () => {
                //focusInput() is defined inside child component RefswithClassComponents19.js
                this.compoentRef.current.focusInput();
            }
            <div>
                <RefswithClassComponents19 ref={this.compoentRef} />
                <button onClick={this.clickHandler}> Click to  Focus on Input</button>
            </div>

<a name="ForwardingRefs"></a>
## Forwarding Refs:
    * Its technique for automatically Forwarding the ref throught component to one of the  childern.
        Ex: ForwardRefParentComponent20.js
                constructor(props) {
                    super(props)
                    this.inputRef = React.createRef();
                }
                parentButtonClick = () => {
                    this.inputRef.current.focus();
                }
                <div>
                    <ForwardRefComponent20 ref={this.inputRef}> </ForwardRefComponent20>
                    <button onClick={this.parentButtonClick}>Focus Input</button>

                </div>
            ForwardRefComponent20.js:
                // This is kind of differnt way of creating the Functional Components
                const ForwardRefComponent20 = React.forwardRef((props, ref) * {
                    return (
                        <div>
                            <input type='text' ref={ref} />
                        </div >
                    )
                })

<a name="Portals"></a>
## Portals:
    * It provides the way to render the childrens in to DOM nodes that exists outside the DOM Hierarchy of the parent component.
        Ex: Suppose we have 1 DOM element in our HTML that we are mounting the React application into.
            Goto -> Public fodler -> index.html 
                    we have HTML div tag  
                    <div id="root"></div>
            Goto -> index.js:
                    Here we are having the code for the DOM to load <App/> component in 'root' element
                    ReactDOM.render(
                        <React.StrictMode>
                            <App />
                        </React.StrictMode>,
                        document.getElementById('root')
                        );
            Goto -> browser -> Incept elemets:
                    Here you see below code that react load inside this tags.
                        <div id='root'>
                            <div class='App'>
                            </div>
                        </div>
    * Now, portals provide the ability to break out of this DOM tree.Means, You can render a component not under this DOM tree elemets.
        Ex:
             index.html:
             right below the <div id="root"></div> tag add
             <div id="portal-root"></div>

             PortalDemo21.js:
                function PortalDemo21() {
                    return ReactDOM.createPortal(
                        <div style={{
                            color: "Highlight", fontSize: 15, backgroundColor: "ActiveCaption", fontWeight: "bolder"
                        }}> <i> Portals Component which is loading outside the 'root' element unde 'portal-root' tag</i> </div>,
                        document.getElementById('portal-root')
                    )
                }
                Goto -> browser -> Incept Elements:
                    Here you see below code that react PortalDemo21 component load outside the 'root' div tage this tags.
                        <div id="portal-root">
                            <div> Portals Demo </div>
                        </div>

    * Mainly this we will use for Modal popup's tooltips which should not get conflict with parent root component.
        Refer:
            https://codesandbox.io/s/00254q4n6p
            https://codepen.io/gaearon/pen/jGBWpE

<a name="ErrorHandling"></a>
## Error Handlings:
    * A class component that implements either one or both of the life cycle mehthods getDerivedStateFromError or componentDidCatch becomes error boundry.
    * We will have two methods in handling errors :
        1) static getDerivedStateFromError(error)
            * This method is used to render a fallback UI after an error is thrown.
        2) componentDidCatch(error, info)
            * This method is used to log the error information.
    * if we want to catch errors on click events, need to use try catch. Error boundry's should not use.

<a name="HOC "></a>
## Higher Order Components (HOC):
    * It is used to share the common functionality b/w components. .
    * A pattern where a function takes a component as an argument and returns a new component.
        Ex: const NewComponent = higheOrderComponent(originalComponent)
            const EnhancedComponent = higheOrderComponent(originalComponent)
                Ex: const ironMan  = withSuit (TonyStark)
                        - ironMan : This is the new component which enhances TonyStart using withSuit function.
                        - withSuit : This is function which enhances TonyStark
                        - TonyStark : This is the originalComponent
    * If you want to pass the props to Component using HOC?
        Ex:
            App.js:
                  <HocClickCounter23 name='prcv'></HocClickCounter23>
            MainHOCCounte23.js:
                - Here we are usign spread operator {...this.props}. This will send all the props to WrappedComponent. These will go to the child button component
                 render() {
                    return <WrappedComponent
                        count={this.state.count}
                        incrementCount={this.incrementCount}
                        {...this.props}
                    ></WrappedComponent>
                }
            HocClickCounter23.js:
                <button
                    onClick={incrementCount}>
                    {this.props.name} - Clicked {count} times
                </button>       

    * How to pass the parameter to HOC functions?
            Ex:
                MainHOCCounte23.js: Pass incrementNumber as a 2nd parameter, use this parameter in incrementCount() function
                    const MainHOCCounte23 = (WrappedComponent, incrementNumber) => {
                        class MainHOCCounteClass extends React.Component {

                            incrementCount = () => {
                                this.setState(prevState => {
                                    return { count: prevState.count + incrementNumber }
                                })
                            }
                         }
                    }
                HocClickCounter23.js: While exporting the HocClickCounter23 component pass the 2nd parameter to HOC component.
                    export default MainHOCCounte23(HocClickCounter23, 5)
                HocHoverCounter23.js: While exporting the HocClickCounter23 component pass the 2nd parameter to HOC component.
                    export default MainHOCCounte23(HocHoverCounter23, 10)
    Refer:
        MainHOCCounte23.js
        HocHoverCounter23.js
        HocClickCounter23.js

    ### `Render Props:` 
    * This is another way to share the data to components.
    * Using this RenderProps technique for `sharing code` b/w Rect Components using `props whose value is a function`.

<a name="ReactContext"></a>
## React Context:
    * If we have lots of components with nested each other
    * In the below diagram, the components A,D & F want to display loggedin username, that information is maintain as property in AppComponent.
    * To display the username in child component we need to pass it as a props
    * From AppComponent to `A` we can pass it as a `props`, But to pass the same for Component D we have Component B in between and same of Component F.
    * We can pass the props level by level using props, but what if we have more no of levels.
    * For this scenario `Context` comes in to pictuer.
    * Context provides a way to pass data throught the component tree without having to pass props down manually at evey level.
    
    Refer: MainContext25.js
           ConponentC25.js
           ConponentE25.js
           ConponentF25.js
        - In the above files we are passing the data from App.js to ComponentF25 compoent with out nexting the props in C or E or F
        - In MainContext25.js file we are creating the context object using `React.createContext()` and creating references for UserProvder and UserConsumer from `React.createContext()` and exprting them to use where ever we want.
            - In `React.createContext()` we can pass default value (`React.createContext('PRCV default value'))
        - In ComponentE25 we used different approach of using Context. But this apprach will work only for Class Compoents and it works for only 1 Context.
        - Multiple context example using in ComponentF25.js
                        _____
                        | A |
         |------------->|___|
         |                |
         |                |
         |                |
         |                |
         |                |
         |                |
   ______|______        __|__              ____ 
  | AppComponent |----> | B |------------> | D |
  |______________|      |___|              |___|
         |                |
         |                |
         |                |
         |                |
         |                |
         |                |
         |              __|__              _____             _____ 
         |------------> | C |------------> | E |------------>| F |
                        | __|              |___|             |___| 

<a name="http"></a>
## HTTP:
    * Reac is a library,its not a framework.
    * React donest have HTTP services. React just use props and states and render it in UI.
    * To make use of HTTP services, we need to plugin the library's ex: axios...
        - Add axios package to the application using npm commmand
            `npm install axios`
        - Once this is installed it will add it in package.json -> dependencies 
    * For practice use online API's to get the data (https://jsonplaceholder.typicode.com/)
    * HTTP calls will place in componentDidMount() methods. because this will loads only once while loading the component during the lifecycle
     Refer:
        GetList26.js
        PostForm26.js

***************This is the basic React Features covered as per the React Offical doumentation *********************
*************** Next will Go to React HOOKS *********************








































  



























## What is React?
* Open source library for building the User interfaces
* Its not a framework.
* Focus only on UI which can build only Rich HTML interfaces.
* Rich Ecosystem: To build Routing, Http services react will support to import the library's.
* It's a Component Based Architecture
* React is declaritive
* React can integrative with any other page like Angular or Veu.js.

### Prerequiste for React JS :
  * JavaScripts:
    * 'this' keyword, filter, map and reduce
  * ES6+:
    * let & const, arrow functions, template literals, default parameters, object literals, rest 
    and spread operators and destructing assignment

## Create new React JS Application:
* __`npx create-react-app reactJs0816`__  (or) 
    * `npm install create-react-app -g`
    * `create-react-app <project-nameXXXXX>`
* This will create new application of ReactJs modules inside reactJs0816 folder
* `npx` is the npm package runner when we install npm
* `npm start` 
* This will run the application on default port 3000

## Folder Structure:

#### package.json:
* It contains dependencys of the projects
* Helps to run and install the application.

#### public(folder):
It contails 3 files.
*  __manifest.json__ : It is conserned about progressive webapps
*  __index.html__: 
     *  This is the only 1 html file will have in our application(SPA). View will dynamically generates using this file.
     *  Mostly will not do any changes in this file.
     *  If React want control UI it will have 1 tag __`<div id='root'></div>`__ 
     *  Runtime react take this div tag and its responsible to UI
*  __src__: 
     *  Will Create all our Components in this folder.
     *  By default it will create some files inside this.
     *  Starting point of the application is __index.js__
*   __index.js__:
    * In this we specify the root Component ie., `App` Component & DOM element (`root` which is the id in index.html) which will be controller by react)
    ```JavaScript

            ReactDOM.render( 
              <React.StrictMode>
                <App /> 
               </React.StrictMode>,
               document.getElementById('root')
             );

    ```JavaScript
             
        
   
 
 

 


#### What is Component?
  * In React we have main root Component ie., App Component (App.js) 
  * In React 1 Component contain other Component.
  * Reusable
  * Component code place the code in JavaScript file(App.js). We can have Component with .JSX file extensions.
  * We have 2 different types of Components:
      1) __`Stateless Functional Component`__:
          * This are JavaScript functions.
          * It returns HTML code to display in UI
            Ex:
            ```javascript
                    function welcome(props) {
                        return `<h1> Hello, {props.name} </h1>
                    }
            ```javascript
      2) __`Stateful Class Component`__:
          *  Its a regular ES6 class that extends `React.Component` class.
          * `render` method is manditory to return HTML.
              ```javascript  
              
                    class welcome extends React.Component {
                        render()  {
                            return `<h1>Hi PRCV</h1>`;
                        }
                    }
            ```javascript












This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
