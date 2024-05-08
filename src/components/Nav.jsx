import { Link } from "react-router-dom";
export default function Nav() {
  return (
      <ul className="bg-slate-700 py-2 flex justify-end text-white mb-10">
        <li className="px-4 hover:text-pink-300">
          <Link to="/">Trivia Quest</Link>
        </li>
        <li className="px-4 hover:text-pink-300">
          <Link to="/form">Form</Link>
        </li>
        <li className="px-4 hover:text-pink-300">
          <Link to="/about">AboutMe</Link>
        </li>
      </ul>
  );
}
