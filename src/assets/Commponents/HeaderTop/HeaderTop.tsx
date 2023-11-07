import { Facebook, Twitter, Google, Pinterest } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button"
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <section>
        <Facebook className="facebook-icon"/>
        <Twitter />
        <Google />
        <Pinterest />
      </section>
      <Button className="logInBtn" variant="outline-secondary">Logga in </Button>
  
    </div>
  );
};

export default HeaderTop;
