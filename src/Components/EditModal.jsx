import React from 'react'
import close_icon from "../assets/close.png";
import { useDispatch } from 'react-redux';
import { closeEditModal } from '../features/modal/modalSlice';

export default function EditModal() {
    const dispatch = useDispatch()

    function handleChange(event){
        console.log(event.currentTarget.value);
        
    }
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 transition-all px-4 py-4">
          <div className="bg-[#151b23] p-6 rounded shadow-lg w-full md:w-1/2 relative text-white">
            {/* elements starts here */}
            <div className="flex flex-col gap-7">
              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">Add Task to</p>
                <img
                  className="h-6 p-0.5 rounded-full hover:bg-black"
                  onClick={() => dispatch(closeEditModal())}
                  src={close_icon}
                  alt="close-icon"
                />
              </div>
              <textarea
                onChange={()=>handleChange}
                value=""
                className="border border-zinc-800 px-4 py-2 rounded-md"
                name="message"
                rows="5"
                cols="30"
                placeholder="Enter task description..."
              ></textarea>
              <div className="flex justify-end gap-5">
                <button
                  onClick={() => dispatch(closeEditModal())}
                  className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600"
                >
                  Cancel
                </button>
                <button className="border border-zinc-800 px-4 py-2 rounded-sm hover:bg-zinc-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
