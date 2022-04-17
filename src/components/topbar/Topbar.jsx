import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar({ activeMenu, setActiveMenu }) {
  return (
    <div className={`topbar ${activeMenu ? `active` : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            raktim.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 824 565314</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>raktim.info@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
