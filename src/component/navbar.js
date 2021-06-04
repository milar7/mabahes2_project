import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const NavbarComp = ({ auth, setAuth, activePage, setActivePage }) => {
    const history = useHistory();

  const handleLogOut = () => {
    setAuth("logOut");
  };
  const addNewProduct = () => {
    history.push(`/new-product`);

  };


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My Resume</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" active={activePage === "home"}>
            Home
          </Nav.Link>
          {auth === "logOut" ? (
            <Nav.Link href="/login" active={activePage === "auth"}>
              Login
            </Nav.Link>
          ) : (
            <Nav.Link href="/profile" active={activePage === "profile"}>
              Profile
            </Nav.Link>
          )}
        </Nav>

        {auth !== "logOut" ? (
          <div>
              
            <Button
              className="mr-4"
              onClick={(e) => addNewProduct(e)}
              variant="info"
              disabled={activePage==="NewProduct"}
            >
              + Add New Product
            </Button>
            <Button onClick={(e) => handleLogOut(e)} variant="outline-dark">
              LogOut
            </Button>
          </div>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
