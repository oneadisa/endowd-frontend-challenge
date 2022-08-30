import "../styles/main.css";
import {  Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="container">
      <div className="form">
        <h3>Complete your Purchase</h3>
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5>Personal Info</h5>
          </Link>
          <Link to="/billing" style={{ textDecoration: "none" }}>
            <h5>Billing Info</h5>
          </Link>
          <Link to="/confirm" style={{ textDecoration: "none" }}>
            <h5 className="page">Confirm Payment</h5>
          </Link>
        </nav>
        <div className="focus-2"></div>
        <div className="modal">
          <div className="head">
            <p>Item Name</p>
            <p>₦ Price</p>
          </div>
          <div className="body">
            <div className="cell">
              <p>Data science and usability</p>
              <p className="price">50,000.00</p>
            </div>
            <div className="cell">
              <p>Shipping</p>
              <p className="price">0.00</p>
            </div>
            <hr />
            <div className="total-container">
              <div className="total">
                <p>Total</p>
                <p className="price">50,000.00</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Link to="/completed">
            <button className="next">Pay</button>
          </Link>
          <Link to="/">
            <button className="cancel">Cancel Payment</button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Confirm;
