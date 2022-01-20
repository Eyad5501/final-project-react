import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, } from "react-router-dom"
import SQBContext from "../utils/SQBContext"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';






function NavbarItem() {
  const { logout } = useContext(SQBContext)
  return (
    <Navbar style={{width:"100%",backgroundColor:"#888888" }}expand="lg">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://images.pexels.com/photos/9429448/pexels-photo-9429448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            className=" rounded-circle"
            
          />
         
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginTop: "8px" }}>
          <Nav >
            <Link className="nav-link"style={{color:"7A7D7B"}} to="/">
          <h5>SQB</h5> 
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link className="nav-link"style={{color:"7A7D7B"}} to="/companise">
            <h5>Companise</h5>
            </Link>
          </Nav>
          {localStorage.tokenAdmins ? (
            <Nav className="ms-auto">
              <Link className="nav-link"style={{color:"7A7D7B"}} to="/profile">
               <h5> <FolderSharedOutlinedIcon/> Profile</h5> 
              </Link>
              <Link className="nav-link"style={{color:"7A7D7B",fontSize:"20px",fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}} to="/" onClick={logout}>
                <h5><LogoutIcon/> Logout </h5>
              </Link>
            </Nav>
            
          ) : (
            
            <Nav style={{marginRight: "50px",marginTop: "1px"}}>
                  <div>
            <Link  className="nav-link" style={{color:"7A7D7B"}}to="/loginUser">
               
            <h5 style={{marginTop: "1px"}}><LoginIcon style={{marginRight: "5px",}} />Login User</h5>
              </Link>
              </div>
              <h5 style={{marginTop: "7px" }} >
              <LoginIcon/> 
              </h5>
               <h5> <NavDropdown title="Login" id="basic-nav-dropdown" style={{color:"7A7D7B",opacity:"0.80",marginBottom: "3px",marginTop: "1px"  }}>
            <a style={{ backgroundColor: "rgb(228, 228, 228)",color:"7A7D7B"}}className="dropdown-item" href="http://localhost:3001/loginEmployee">
                <h6>LoginEmployee</h6>
              </a>
              <NavDropdown.Divider />
              <a  style={{ backgroundColor: "rgb(228, 228, 228)",color:"7A7D7B"}}className="dropdown-item" href="http://localhost:3001/loginCompany">
               <h6>LoginCompany</h6> 
              </a>
          
            </NavDropdown>
            </h5>
            
           
          </Nav>  
          )}     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
