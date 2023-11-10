import { Facebook, Twitter, Google, Pinterest } from "react-bootstrap-icons";
import LogInBtn from "../Buttons/LoginBtn/LoginBtn";
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
      <LogInBtn/>
      
  
    </div>
  );
};

export default HeaderTop;
