import React from 'react';
import FunctionalComponent from './components/FunctionalComponentOne'
import { NamedExportComponent } from './components/FunctionalComponentOne'
import ClassComponentTwo from './components/ClassComponentTwo'
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
          <h2>1) Functional Components</h2>
          <FunctionalComponent></FunctionalComponent>
          <NamedExportComponent></NamedExportComponent>
        </li>
        <li>
          <h2>2) Class Components</h2>
          <ClassComponentTwo></ClassComponentTwo>
        </li>
      </ul>

    </div>
  );
}

export default App;
