import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        // src="https://images-wixmp-wed30a86b8ca887773594c2.wixmp.com/f/"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar logo"
      />
    </div>
  );
}

export default Nav;
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import NavDropdown from "react-bootstrap/NavDropdown";

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;
