import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarComp = ({ auth, setAuth, activePage, setactivePage }) => {
  const handleLogOut = () => {
    setAuth("logOut");
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
          <Button onClick={(e) => handleLogOut(e)} variant="outline-dark">
            LogOut
          </Button>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
