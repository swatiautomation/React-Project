const Popup = ({ title, closeBtn }) => {
  return (
    <div className="popup">
      <button onClick={closeBtn} className="crossBtn">✕</button>
      <div className="popupCard">
        <h2 className="popupTitle">⚠ {title}</h2>
        <p className="popupMessage">Are you sure you want to {title.toLowerCase()} this?</p>
        <div className="confirmButtons">
          <button className="noBtn">No</button>
          <button className="yesBtn">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
