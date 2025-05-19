import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";

function Header() {
  return (
    <div className="header-container">
      <img width="180" src={logo} />
      <Button name="Em Alta" />
      <Button name="Séries de TV" />
      <Button name="Shows de TV" />
    </div>
  );
}

export default Header;
