
import "./App.css";
import A from "./components/A";
import B from "./components/B";
import { useMyContext } from "./Mycontext";

function App() {
  const data = useMyContext();
 

  return (
    <>
      <div className="bg-red-300 p-10 flex flex-col justify-center align">
        App {data.count}
        <A />
        <B />
      </div>
    </>
  );
}

export default App;
