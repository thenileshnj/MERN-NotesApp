import React from 'react'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";

const NoteCard = ({title, body, user, _id}) => {


    const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote =()=>{

    dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
    setIsEditOpen(false)

  }

  return (
    <>
      <div className='w-auto min-w-min bg-purple-700 shadow-xl drop-shadow-lg rounded-2xl p-2'>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="mb-2">{body}</p>
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                setIsEditOpen(true);
              }}
              className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={()=>{dispatch(deleteNotes(_id))}}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>

        {isEditOpen ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              value={tempTitle}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              value={tempBody}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              onClick={updateNote}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
              onClick={(e) => {
                setIsEditOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default NoteCard;