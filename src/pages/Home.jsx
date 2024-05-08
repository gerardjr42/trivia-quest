import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-center text-9xl font-bold text-white">Trivia</h1>
        <div className="ml-4 flex justify-center text-4xl mb-6">
          <h2 className="mr-2 h-12 w-12 rounded-full bg-[#178FF2] text-center flex items-center justify-center">
            Q
          </h2>
          <h2 className="mr-2 h-12 w-12 rounded-full bg-[#F27B19] text-center flex items-center justify-center">
            U
          </h2>
          <h2 className="mr-2 h-12 w-12 rounded-full bg-[#E119F3] text-center flex items-center justify-center">
            E
          </h2>
          <h2 className="mr-2 h-12 w-12 rounded-full bg-[#16F384] text-center flex items-center justify-center">
            S
          </h2>
          <h2 className="mr-2 h-12 w-12 rounded-full bg-[#178FF2] text-center flex items-center justify-center">
            T
          </h2>
        </div>
        <h3 className="mb-4 ml-4 text-center text-3xl text-white">
          Test Your Knowledge!
        </h3>
      </div>
      <div className="ml-6 flex justify-center">
        <button className="rounded bg-[#1F2937] px-2 py-1 text-white text-2xl">
          <Link to="/form">Start</Link>
        </button>
      </div>
    </>
  );
}
