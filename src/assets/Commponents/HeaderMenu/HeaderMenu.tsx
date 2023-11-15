import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddCompanyBtn from "../Buttons/AddCompanyBtn/AddCompanyBtn";
import { gql, useQuery } from "@apollo/client";

interface iMenu {
  id: string;
  label: string;
  uri: string;
  parentId: string | null;
  childItems: {
    nodes: ichildItems[]
  }
}

interface ichildItems {
  id: string;
  label: string;
  uri: string;
  parentId: string | null;
}

const HeaderMenu = () => {
  // const [headerMenu, setHeaderMenu] = useState<iMenu[]>([]);

  const GET_MENU = gql`
    query NewQuery {
      menu(id: "huvudmeny", idType: NAME) {
        id
        menuItems {
          nodes {
            id
            label
            parentId
            childItems {
              nodes {
                id
                label
                uri
                parentId
              }
            }
          }
        }
      }
      }
  `;

  const { loading, error, data } = useQuery(GET_MENU);
    
  if (loading) return <p>...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Navbar
      key={"sm"}
      expand={"sm"}
      className="bg-body-tertiary mb-3 headerMenu"
    >
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
              {" "}
              {data.menu.menuItems.nodes.map(
                (menuItem: iMenu, index: number) => (
                  menuItem.childItems.nodes.length > 0 ? 
                  <NavDropdown
                  key={menuItem.id}
                  title= {menuItem.label}
                  id={"offcanvasNavbarDropdown-expand-sm"}
                >
                  {menuItem.childItems.nodes.map((dropdownItem: ichildItems) => (
                      <NavDropdown.Item key={dropdownItem.id} id={dropdownItem.id} >
                      {dropdownItem.label}
                      </NavDropdown.Item>
                  )
                  )}
                 
                </NavDropdown> : menuItem.parentId == null &&
                  <Nav.Link href={menuItem.uri} key={index}>
                    {menuItem.label}
                  </Nav.Link>
                )
              )}
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
    
  );
};

export default HeaderMenu;
