import "../styles/main.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="end-container">
      <div className="form">
        <div className="end-modal">
          <h2 className="heading">Uh-Oh!</h2>
          <p className="details">
            This page does not exist.
          </p>
          <Link to="/">
            <p className="home">Return Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound