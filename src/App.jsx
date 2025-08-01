import { useDispatch, useSelector } from "react-redux";
import AddModal from "./Components/AddModal";
import EditModal from "./Components/EditModal";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  const { addModal, editModal } = useSelector((state) => state.Modal);

  return (
    <div>
      <div className="bg-[#010409] text-white w-full w-max-7xl px-[5%] py-[3%] min-h-screen font-family">
        <Header />
        <Card/>
      </div>
      {addModal && <AddModal />}
      {editModal && <EditModal />}
    </div>
  );
}

export default App;
