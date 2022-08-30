import React from 'react'

const Confirm = () => {
  return (
    <div className="container">
      <div className="form">
        <h3>Complete your Purchase</h3>
        <nav>
          <h5>Personal Info</h5>
          <h5>Billing Info</h5>
          <h5>Confirm Payment</h5>
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
          <button className="next">Pay</button>
          <button className="cancel">Cancel Payment</button>
        </footer>
      </div>
    </div>
  );
}

export default Confirm