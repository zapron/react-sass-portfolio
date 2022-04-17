import "./menu.scss";

function Menu({ activeMenu, setActiveMenu }) {
    function closeMenu(){
        setActiveMenu(false)
    }
  return (
    <div className={`menu ${activeMenu ? `active` : ""}`}>
      <ul>
        <li onClick={closeMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#portfolio ">Portfolio</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
