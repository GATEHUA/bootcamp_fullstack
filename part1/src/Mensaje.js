// const Mensaje = () =>{
//     return <h1>Hola Mundo funciona desde modulo</h1>
//   }
const Mensaje = (props) =>{
    // console.log(params);
    return <h1 style={{color: props.color}}>{props.message}</h1>
  }
  export default Mensaje;