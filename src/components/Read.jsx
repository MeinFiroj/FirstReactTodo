const Read = (props) => {
  const alltodos = props.alltodos;
  const setalltodos = props.setalltodos;

  const deleteHandler = (id) => {
    const filteredTodos = alltodos.filter((todo) => todo.id !== id);
    setalltodos(filteredTodos);
  };

  const renderTodos = alltodos.map((todo) => {
    return (
      <li className="flex justify-center items-center gap-2 mb-2" key={todo.id}>
        <span className={`${todo.isImportant? 'text-green-500 font-medium' : 'text-white'} border border-white py-2 px-4 rounded-lg w-full capitalize`}> {todo.title} </span>
        <button className="py-2 px-5 text-xl bg-red-500 rounded-lg cursor-pointer" onClick={() => deleteHandler(todo.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="h-full w-[50%]">
      <h1 className="text-7xl mb-10"><span className="text-red-400">Pending</span> Todos</h1>
      <ul className="border rounded-lg h-[80%] w-full p-2 overflow-y-auto">{renderTodos}</ul>
    </div>
  );
};

export default Read;
