import React from 'react'

const Confirm = () => {
  return (
    <div>
      <h3>Complete your Purchase</h3>
      <nav>
        <h4>Personal Info</h4>
        <h4>Billing Info</h4>
        <h4>Confirm Payment</h4>
      </nav>

      <div>
        <div>
          <p>Item Name</p>
          <p>Price</p>
        </div>
        <div>
          <p>Data science and usability</p>
          <p>50,000.00</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>0.00</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>50,000.00</p>
        </div>
      </div>
      <button>Next</button>

      <button>Cancel Payment</button>
    </div>
  );
}

export default Confirm