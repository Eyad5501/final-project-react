import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import SQBContext from "../utils/SQBContext"

function NavbarItem() {
  const { logout } = useContext(SQBContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://images.pexels.com/photos/9429448/pexels-photo-9429448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
         
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/orders">
           MyOrders
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
           SQB
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link className="nav-link" to="/companise">
            companise
            </Link>
          </Nav>
          {localStorage.tokenUsers ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
            
          ) : (
            
            <Nav className="me-auto">
            <Link className="nav-link" to="/loginUser">
                Login user
              </Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
            <a className="dropdown-item" href="http://localhost:3001/loginEmployee">
                Loginemployee
              </a>
              <NavDropdown.Divider />
              <a className="dropdown-item" href="http://localhost:3001/loginCompany">
                LoginCompany
              </a>
          
            </NavDropdown>
          </Nav>  
          )}     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
