import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddCompanyBtn from "../Buttons/AddCompanyBtn/AddCompanyBtn";

// import { useEffect, useState } from "react";
const HeaderMenu = () => {

  // const [posts, setPosts] = useState([]);
  // const categoryId = "dfsbs45464grtb"

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://your-wordpress-site.com/wp-json/wp/v2/posts?categories=${categoryId}`
  //       );
  //         const data = await response.json()
  //       setPosts(data);
  //       console.log(posts);
        
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);





  
  return (
    <>
      <Navbar key={"sm"} expand={"sm"} className="bg-body-tertiary mb-3 headerMenu">
        <Container fluid>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-sm"}
            aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                Ventilation 24
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Hem</Nav.Link>
               
              
                {/* <NavDropdown
                  title="Tjänster"
                  id={"offcanvasNavbarDropdown-expand-sm"}
                >
                  {posts.map((menuItem) => 
                                    <NavDropdown.Item key={menuItem.id} href={menuItem.link}>
                                    Industri ventilation
                                  </NavDropdown.Item>
                  )}

                  </NavDropdown> */}
                <NavDropdown
                  title="Tjänster"
                  id={"offcanvasNavbarDropdown-expand-sm"}
                >
                  <NavDropdown.Item href="#action1">
                    Industri ventilation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Lägenhet ventilation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Hus ventilation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Ventilation offentlig sektor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Ventilation för företag
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Ventilationssystem
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Ventilationsservice
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  Ventilationsfilter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  
                  OVK besiktning
                </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Badrumsventilation
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action4">
                
                    Köksventilation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
            
                    Ventilationsrengöring
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Ventilationsfirmor</Nav.Link>
                <Nav.Link href="#">Rotavdrag</Nav.Link>
                <AddCompanyBtn />
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderMenu;
