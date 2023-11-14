// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import AddCompanyBtn from "../Buttons/AddCompanyBtn/AddCompanyBtn";
import { gql, useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface iMenu {
  label: string
  uri: string
}

const HeaderMenu = () => {
  // const [headerMenu, setHeaderMenu] = useState<iMenu[]>([]);
  
  const GET_MENU = gql`
  query NewQuery {
    menu(id: "dGVybTo1") {
      menuItems {
        nodes {
          uri
          label
        }
      }
    }
  }
  `;


  const { loading, error, data } = useQuery(GET_MENU);

//   useEffect(async()=> {
//     const item = await data
//     setHeaderMenu(item.menu.menuItems.nodes)
//     if (!error && data) return setHeaderMenu(data.menu.menuItems.nodes)
// console.log('hej', headerMenu);
    
//   }, [loading,error, data, headerMenu])

  if (loading) return <p></p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <ul className="headerUl">
      {data.menu.menuItems.nodes.map((menuItem: iMenu, index: number) => (
      <NavLink to={menuItem.uri} key={index}>
        <li>
          {menuItem.label}
        </li>
      </NavLink>
    ))}
    </ul>
  );
};


// const categoryId = "dfsbs45464grtb"

// return (
//   <>
//     <Navbar key={"sm"} expand={"sm"} className="bg-body-tertiary mb-3 headerMenu">
//       <Container fluid>
//         <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />
//         <Navbar.Offcanvas
//           id={"offcanvasNavbar-expand-sm"}
//           aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
//               Ventilation 24
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="#">Hem</Nav.Link>

//               {/* <NavDropdown
//                 title="Tjänster"
//                 id={"offcanvasNavbarDropdown-expand-sm"}
//               >
//                 {posts.map((menuItem) =>
//                                   <NavDropdown.Item key={menuItem.id} href={menuItem.link}>
//                                   Industri ventilation
//                                 </NavDropdown.Item>
//                 )}

//                 </NavDropdown> */}
//               <NavDropdown
//                 title="Tjänster"
//                 id={"offcanvasNavbarDropdown-expand-sm"}
//               >
//                 <NavDropdown.Item href="#action1">
//                   Industri ventilation
//                 </NavDropdown.Item>

//               </NavDropdown>
//               <Nav.Link href="#">Ventilationsfirmor</Nav.Link>
//               <Nav.Link href="#">Rotavdrag</Nav.Link>
//               <AddCompanyBtn />
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   </>
// );
// };

export default HeaderMenu;
