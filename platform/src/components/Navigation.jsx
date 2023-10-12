// import React, { useState } from "react";
// import Link from "next/link";

// let NavigationBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="nav-bar">
//       <h1 className="nav-logo">Logo</h1>

//       <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
//         &#9776;
//       </div>

//       <ul className={`nav-list ${isOpen ? "show" : ""}`}>
//         <li className="nav-list-items">
//           <Link href="/">Home</Link>
//         </li>

//         <li className="nav-list-items dropdown">
//           <Link href="#">Categories</Link>

//           <ul className="dropdown-list">
//             <li className="dropdown-list-items">
//               <Link href="#">Option 1</Link>
//             </li>

//             <li className="dropdown-list-items">
//               <Link href="#">Option 2</Link>
//             </li>
//           </ul>
//         </li>

//         <li className="nav-list-items">
//           <Link href="#">All Tools</Link>
//         </li>

//         <li className="nav-list-items">
//           <Link href="/about">About</Link>
//         </li>
//       </ul>
//       <button className="signin-button">Sign In</button>
//       <button className="signup-button">Sign Up</button>
//     </nav>
//   );
// };

// export default NavigationBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { Button } from "react-bootstrap";

let CollapsibleExample = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Link href="/" passHref>
          {" "}
          {/* `passHref` is essential here */}
          <Navbar.Brand>HelpMeBuild</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-items" href="#features">Top Picks</Nav.Link>

            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-items" href="#pricing">All Tools</Nav.Link>
            <Nav.Link className="nav-items" href="#pricing">About</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Log In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
      
              <Button>Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
