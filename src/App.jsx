import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="bg-gray-800  text-white text-2xl font-thin p-8 flex justify-between items-start h-screen w-screen">
      <Create />
      <Read />
    </div>
  );
};

export default App;
