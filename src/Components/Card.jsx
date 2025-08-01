import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAddModal, openEditModal } from "../features/modal/modalSlice";
import add_icon from "../assets/add.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";
import { v4 as uuidv4 } from "uuid";
import { columns } from "../assets/columns";

export default function Card() {
  const dispatch = useDispatch();
  const OG = useSelector((state) => state.OG);
  const { Todo, Inprogress, Done } = useSelector((state) => state.OG);
  // console.log(Inprogress);
  // console.log(Done);
  // console.log(Todo);


  return (
    <main className="flex flex-col gap-5 md:flex-row min-h-96 ">
      {/* card code starts here */}
      {Object.entries(OG).map(([category, tasks], index) => {
        return (
          <div
            key={uuidv4()}
            className="w-full bg-[#151b23] rounded-lg  px-5 py-3"
          >
            <div className="flex justify-between my-2">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3  rounded-full ${columns[category].color}`}></div>
                <div className="font-semibold text-lg">{columns[category].title}</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-7 w-6 bg-[#0d1117] rounded-full text-center flex items-center justify-center">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div
                  onClick={() => dispatch(openAddModal(category))}
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
            {tasks.map((task, index) => {
              return (
                <div className="h-auto" key={uuidv4()}>
                  {/* <div className="px-4 py-4 rounded-2xl my-3 flex justify-center border-2 border-dashed ">
                    <p>Drop tasks here</p>
                  </div> */}
                  <div className="bg-[#010409] px-4 py-6 rounded-2xl my-3 flex justify-between group min-h-20">
                    <p className="w-5/6">{task.content}</p>
                    <div className="gap-2 hidden group-hover:flex">
                      <img
                        onClick={() => dispatch(openEditModal())}
                        className="h-6 hover:bg-gray-800 p-1 rounded-lg"
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
              );
            })}

            {/* list code end here */}
          </div>
        );
      })}

      {/* card code ends here */}
    </main>
  );
}
