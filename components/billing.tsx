import React from "react";

const Billing = () => {
  return (
    <div>
      <h3>Complete your Purchase</h3>
      <nav>
        <h4>Personal Info</h4>
        <h4>Billing Info</h4>
        <h4>Confirm Payment</h4>
      </nav>

      <p>Name on Card</p>
      <input type="text" placeholder="Opara Linus Ahmed" />

      <p>State</p>
      <select name="pets" id="pet-select" value="Visa">
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Verve">Verve</option>
        <option value="American Express">American Express</option>
      </select>

      <p>Card Details</p>
      <input type="number" />

      <p>Expiry Date</p>
      <input type="date" />

      <p>CVV</p>
      <input type="number" />

      <button>Next</button>

      <button>Cancel Payment</button>
    </div>
  );
};

export default Billing;
