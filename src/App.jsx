import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { nanoid } from "nanoid";

const App = () => {
  const [alltodos, setalltodos] = useState([
    { id: nanoid(), title : 'Go to Gym', isImportant : false }
  ]);

  return (
    <div className="bg-gray-800  text-white text-2xl font-thin p-8 flex justify-between items-start h-screen w-screen">
      <Create alltodos={alltodos} setalltodos={setalltodos} />
      <Read alltodos={alltodos} setalltodos={setalltodos} />
    </div>
  );
};

export default App;
