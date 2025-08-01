import { useState } from "react";
import add_icon from "./assets/add.png";
import close_icon from "./assets/close.png";
import delete_icon from "./assets/delete.png";
import edit_icon from "./assets/edit.png";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  return (
    <div>
      <div className="bg-[#010409] text-white w-full w-max-7xl px-[5%] py-[3%] min-h-screen font-family">
        <header className="w-full pb-6">
          <h1 className="text-4xl font-semibold">Kanban Board</h1>
          <p className="py-1">
            A modern, drag-and-drop interface for your tasks.
          </p>
        </header>
        <main className="flex flex-col gap-5 md:flex-row min-h-96 ">
          {/* card code starts here */}
          <div className="w-full bg-[#151b23] rounded-lg  px-5 py-3">
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                <div className="font-semibold text-lg">To Do</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-7 w-6 bg-[#0d1117] rounded-full text-center flex items-center justify-center">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div
                  onClick={() => setIsAddModalOpen(true)}
                  className="text-2xl hover:bg-black rounded-full "
                >
                  <img
                    className="text-blue-500"
                    src={add_icon}
                    alt="add-icon"
                  />
                </div>
              </div>
            </div>
            {/* list code starts here */}
            <div>
              <div className="px-4 py-4 rounded-2xl my-3 flex justify-center border-2 border-dashed ">
                <p>Drop tasks here</p>
              </div>
              <div className="bg-[#010409] px-4 py-4 rounded-2xl my-3 flex justify-between group">
                <p className="w-5/6">
                  Reciew project i dont something more requirements.
                </p>
                <div className="gap-2 hidden group-hover:flex">
                  <img
                    onClick={()=>setIsEditModalOpen(true)}
                    className="h-7 hover:bg-gray-800 p-1 rounded-lg"
                    src={edit_icon}
                    alt="edit-icon"
                  />
                  <img
                    className="h-7 hover:bg-gray-800 p-1 rounded-lg"
                    src={delete_icon}
                    alt="delete-icon"
                  />
                </div>
              </div>
            </div>
            {/* list code end here */}
          </div>
          {/* card code ends here */}
        </main>
      </div>
      {/* addModal code */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 transition-all px-4 py-4">
          <div className="bg-[#151b23] p-6 rounded shadow-lg w-full md:w-1/2 relative text-white">
            {/* elements starts here */}
            <div className="flex flex-col gap-7">
              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">Add Task to</p>
                <img
                  className="h-6 p-0.5 rounded-full hover:bg-black"
                  onClick={() => setIsAddModalOpen(false)}
                  src={close_icon}
                  alt="close-icon"
                />
              </div>
              <textarea
                className="border border-zinc-800 px-4 py-2 rounded-md"
                name="message"
                rows="5"
                cols="30"
                placeholder="Enter task description..."
              ></textarea>
              <div className="flex justify-end gap-5">
                <button onClick={() => setIsAddModalOpen(false)} className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600">
                  Cancel
                </button>
                <button className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* editModal code */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 transition-all px-4 py-4">
          <div className="bg-[#151b23] p-6 rounded shadow-lg w-full md:w-1/2 relative text-white">
            {/* elements starts here */}
            <div className="flex flex-col gap-7">
              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">Add Task to</p>
                <img
                  className="h-6 p-0.5 rounded-full hover:bg-black"
                  onClick={() => setIsEditModalOpen(false)}
                  src={close_icon}
                  alt="close-icon"
                />
              </div>
              <textarea
                className="border border-zinc-800 px-4 py-2 rounded-md"
                name="message"
                rows="5"
                cols="30"
                placeholder="Enter task description..."
              ></textarea>
              <div className="flex justify-end gap-5">
                <button onClick={() => setIsEditModalOpen(false)} className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600">
                  Cancel
                </button>
                <button className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
