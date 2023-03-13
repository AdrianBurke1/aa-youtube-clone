import { Link } from "react-router-dom"
export default function Header() {
      return (
        <header>
          <Link to="/">
          <h1 className="title">Youtube</h1>
          </Link>
          </header>
      );
    };