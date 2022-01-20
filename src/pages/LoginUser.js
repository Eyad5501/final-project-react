import { useContext } from "react"
import { Form, Col, Row, Button,Container } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import pexelsLogin from "../image/pexels-Login.jpg"
import video from "../image/login.mp4"
import "./LoginUser.css"

function LoginUser() {
  const { loginUser } = useContext(SQBContext)

  return (
    <div >
    <video className="v"src={video} autoPlay muted loop />
    <div className="A">
      <img
            className="I"
            src={pexelsLogin}id="pexels-Login.jpg"
            alt="First slide"
         />
{/* //     <div class="login-container">
//   <div class="logo-container vertical-center">
//     <img src="https://i.ibb.co/D5t6vhf/LOGO-ERNESTO-01-1.png" alt=""/>
//   </div>
//   <div class=" vertical-center text-center">
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 offset-md-3">
//           <form>
//             <img class="mb-4" src="https://i.ibb.co/D5t6vhf/LOGO-ERNESTO-01-1.png" width="200"/>
//             <h1 class="h3 mb-3 fw-normal">Inicio de sesión</h1>

//             <div class="form-floating">
//               <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//               <label for="floatingInput">Correo electronico</label>
//             </div>
//             <div class="form-floating">
//               <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//               <label for="floatingPassword">Contraseña</label>
//             </div>

//             <div class="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value="remember-me"/> Recuerdame
//               </label>
//             </div>
//             <button class="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
//             <p class="mt-5 mb-3 text-muted">
//               <a id="forgot-password" href="#">¿Ha olvidado su contraseña?</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
    <div className="formInput">
      <div className="formText">
       <h1>LoginUser</h1>
     <Form className="mt-5" onSubmit={loginUser}>
        <Form.Group as={Row} className="mb-3 mt-7">
          <Form.Label column md="4" style={{ marginRight:"100px"}}>
          <h4> Email</h4>
          </Form.Label>
          <Col md="8" >
            <Form.Control style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"10px 60px"}} type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-6">
          <Form.Label column md="4"style={{ marginRight:"100px"}}>
            <h4>Password</h4>
          </Form.Label>
          <Col md="8">
            <Form.Control   style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"10px 60px"}}type="password" name="password" required />
          </Col>
        </Form.Group>
        <Form.Group className="my-5"style={{marginRight:"50px"}} >
          <Col >
            <button className="btn" style={{backgroundColor:"#F4F3F0",
            borderColor: "gray",color:"#797978",padding:"10px", width:"40%"}}type="submit"><h6>Login User</h6></button>
          </Col>
        </Form.Group>
      </Form>
      </div>
      </div>

      </div>
      </div>
   
  )
}

export default LoginUser
