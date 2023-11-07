import "./HeaderMenu.css"
import Nav from 'react-bootstrap/Nav';

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Hem</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Tjänster</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Ventilationsfirmor</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
        Rotavdrag
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default HeaderMenu