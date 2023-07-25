import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { BsPlusLg } from "react-icons/bs";

const NotesPage = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  // console.log(data);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote = () => {
    dispatch(createNotes({ title, body }));
    setIsModalOpen(false);
    setTitle("")
    setBody("")
  };

  return (
    <>
    <div className="flex flex-wrap mx-4 my-4 p-8 gap-2 ">
      {notes?.map((el) => (
        <NoteCard {...el} />
      ))}
      </div>

      <div
        className="absolute right-4 bottom-12"
        onClick={(e) => {
          setIsModalOpen(true);
        }}
      >
        <BsPlusLg />
      </div>

      {isModalOpen ? (
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
              value={title}
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
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              onClick={createNote}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
              onClick={(e) => {
                setIsModalOpen(false);
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
  );
};

export default NotesPage;
