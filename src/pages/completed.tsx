import "../styles/main.css";
import ellipse from "../images/Ellipse 49.png";
import vector from "../images/Vector.png"
import {  Link } from "react-router-dom";

const Completed = () => {
  return (
    <div className="end-container">
      <div className="form">
        <div className="end-modal">
          <div className="icon-container">
            <div className="icon">
              <img
                src={ellipse}
                alt="ellipse"
                height="120px"
                width="120px"
                className="ellipse"
              />
              <img
                src={vector}
                alt="vector"
                height="40px"
                width="40px"
                className="vector"
              />
            </div>
          </div>
          <h2 className="heading">Purchase Completed</h2>
          <p className="details">
            Please check your email for details concerning this transaction
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="home">Return Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Completed;
