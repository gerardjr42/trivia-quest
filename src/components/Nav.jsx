import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Trivia Quest</Link>
          <Link to="/form">Form</Link>
          <Link to="/about">AboutMe</Link>
        </li>
      </ul>
    </>
  );
}
