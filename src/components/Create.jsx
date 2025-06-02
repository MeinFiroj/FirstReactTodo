import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const alltodos = props.alltodos;
  const setalltodos = props.setalltodos;

  const [title, settitle] = useState("");
  const [isImportant, setisImportant] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isImportant,
    };

    if (newTodo.title.trim().length > 1) setalltodos([...alltodos, newTodo]);
    settitle('');
    setisImportant(false);
  };

  return (
    <div className="w-[50%]">
      <h1 className="text-7xl mb-10">Create Todos</h1>
      <form className="flex flex-col items-start gap-10"
      onSubmit={submitHandler}>
        <input className="text-white border-b-1 w-[70%] p-2 outline-none"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter task here.."
        />
       <div>
         <input
         className="scale-170 mx-3 accent-green-500"
          onChange={(e) => setisImportant(e.target.checked)}
          checked={isImportant}
          type="checkbox"
          id="impCheck"
        />
        <label htmlFor="impCheck">Important?</label>
       </div>
        <button className="px-8 py-2 border rounded-lg hover:bg-white hover:text-gray-800 cursor-pointer transition duration-200 ease"
        >Add Todo</button>
      </form>
    </div>
  );
};

export default Create;
