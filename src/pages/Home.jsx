import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-center text-8xl font-bold text-white">Trivia</h1>
        <h2 className="ml-4 flex justify-center text-4xl">
          <h1 className="mr-2 h-10 w-10 rounded-full bg-red-300 text-center">Q</h1>
          <h1 className="h-10 w-10 rounded-full bg-red-300 text-center mr-2">U</h1>
          <h1 className="h-10 w-10 rounded-full bg-red-300 text-center mr-2">E</h1>
          <h1 className="h-10 w-10 rounded-full bg-red-300 text-center mr-2">S</h1>
          <h1 className="h-10 w-10 rounded-full bg-red-300 text-center mr-2">T</h1>
        </h2>
        <h3 className="ml-4 text-center text-xl text-white">
          Test Your Knowledge
        </h3>
      </div>
      <div className="flex justify-center ml-6">
        <button className="bg-[#1F2937] text-white rounded px-2 py-1">
          <Link to="/form">Start</Link>
        </button>
      </div>
    </>
  );
}
