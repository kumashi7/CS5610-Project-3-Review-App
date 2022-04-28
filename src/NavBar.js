import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div>
            <nav id="navbar">
                <a className="flex-nav-item" href="./">HOME</a>
                <a className="flex-nav-item" href="Login">Log in</a>
                <a className="flex-nav-item" href="createUser">Sign up</a>
            </nav>
        </div>
    )

}

// import React from 'react';
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import './NavBar.css';


// export default function NavBar() {
//     return (
//         /**Reference: https://getbootstrap.com/docs/5.1/examples/headers/#
//          * The tenth header at the bottom, but changed to navbar-expand-sm,
//          * and changed all <a> tag to NavLink.
//          */
//         <div className="nav-bar">
//             <Navbar bg="dark" variant="dark" expand="lg">
//                 <Container>
//                     <Navbar.Brand href="/">Review App</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto">
//                             {/* need modification for signed in cases */}
//                             <Nav.Link href="/">ReviewApp</Nav.Link>
//                             <Nav.Link href="/login">Login</Nav.Link>
//                             <Nav.Link href="/createUser">Create User</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// };
