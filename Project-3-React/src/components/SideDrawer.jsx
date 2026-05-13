import Nav from "./Nav";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`sideDrawer ${isOpen && "open"}`}>
      <button className="closeBtn" onClick={onClose}>
        X
      </button>
      <Nav>Home</Nav>
      <Nav>About</Nav>
      <Nav>Contact </Nav>
      <Nav>Service</Nav>
      <Nav>Help</Nav>
    </div>
  );
};

export default SideDrawer;
