import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  const [alltodos, setalltodos] = useState([
    { id: nanoid(), title: "Go to Gym", isImportant: false },
  ]);

  return (
    <todoContext.Provider value={[alltodos, setalltodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
