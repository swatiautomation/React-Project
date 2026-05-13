import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Popup from "./components/Popup";

function App() {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  function editClick() {
    setShowEditPopup(true);
  }
  function deleteClick() {
    setShowDeletePopup(true);
  }
  function closeEditPopup() {
    setShowEditPopup(false);
  }
  function closeDeletePopup() {
    setShowDeletePopup(false);
  }
  return (
    <main>
      <div className="buttons">
        <Button onClick={editClick}>Edit</Button>
        <Button onClick={deleteClick}>Delete</Button>
      </div>
      {/* <Popup /> */}
      {showEditPopup && <Popup title={"Edit"} closeBtn={closeEditPopup} />}
      {showDeletePopup && (
        <Popup title={"Delete"} closeBtn={closeDeletePopup} />
      )}
    </main>
  );
}

export default App;
