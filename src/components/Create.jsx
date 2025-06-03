import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Create = (props) => {
  const alltodos = props.alltodos;
  const setalltodos = props.setalltodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setalltodos([...alltodos, data]);
    reset();
  };

  return (
    <div className="w-[50%]">
      <h1 className="text-7xl mb-10">Create Todos</h1>
      <form
        className="flex flex-col items-start gap-2"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register("title", { required: "Title can not be empty" })}
          className="text-white border-b-1 w-[70%] p-2 outline-none"
          type="text"
          placeholder="Enter task here.."
        />
        <small className="text-red-400">{errors?.title?.message}</small>
        <div className="py-8">
          <input
            {...register("isImportant")}
            className="scale-170 mx-3 accent-green-500"
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
