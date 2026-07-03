import "./App.css";
import Navbar from "./components/Navbar";
import News from "./page/News";

//Modal creation
/*function App() {
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
      
      {showEditPopup && <Popup title={"Edit"} closeBtn={closeEditPopup} />}
      {showDeletePopup && (
        <Popup title={"Delete"} closeBtn={closeDeletePopup} />
      )}
    </main>
  );
}*/

function App() {
  return (
    <>
      <Navbar className={'sticky top-0 z-10'} />
      <News  className={'pb-10'}/>
    </>
  );
}

export default App;
