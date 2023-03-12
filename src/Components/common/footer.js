import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <footer>
        <p>Youtube</p>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </footer>
    );
  };