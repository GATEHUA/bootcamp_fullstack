// import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       Hola mundo
//     </div>
//   );
// }

  // const App = () => {
    // const a=2;
    // const b=3;
    // const mensaje= 'Hola mundo desde variable';
    
    const Descriptio = () => {
      return <p>Esta es la app del curso fullstack bootcamp</p>
    }
    
    // return(
    //   <div className='App'>
    //     {a+b}
    //     <br/> ---  <br></br>
    //     {mensaje + ' evaluacion en JSX'}
    //   </div>
    // )


    // return(
    //   <div className='App '>
    //     <h1>Titulo de la App</h1>
    //     <strong>Estamos trabajando en ello</strong>
    //     <div>
    //       <p>El resultado es:</p>
    //       {a+b}
    //     </div>
    //   </div>
    // )


    // se inician siempre con mayuscoluas paara q no se rompan los tion al variar con un html <Descriptio/>

    const App = () =>{
      return(
        <div className='App'>
          {/* <Mensaje />
          <Mensaje></Mensaje> */}
          <Mensaje color='green' message="Estamos trabajando"></Mensaje>
          <Mensaje color='red' message="En un curso de react"/>
          <Descriptio /> 
        </div>
      )
    }
  // }


export default App;
