import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Create = () => {
  const [alltodos, setalltodos] = useContext(todoContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setalltodos([...alltodos, data]);
    toast.success("Todo added successfully!");
    reset();
  };

  return (
    <div className="w-[50%]">
      <h1 className="text-7xl mb-10">Create Todos</h1>
      <form
        className="flex flex-col items-start"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="text-white border-b-1 w-[70%] p-2 outline-none"
          {...register("title", { required: "Input field can not be empty" })}
          type="text"
          placeholder="Enter task here.."
        />
        {<small className="text-red-400">{errors?.title?.message}</small>}
        <div className="py-10">
          <input
            className="scale-170 mx-3 accent-green-500"
            {...register("isImportant")}
            type="checkbox"
            id="impCheck"
          />
          <label htmlFor="impCheck">Important?</label>
        </div>
        <button className="px-8 py-2 border rounded-lg hover:bg-white hover:text-gray-800 cursor-pointer transition duration-200 ease">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
