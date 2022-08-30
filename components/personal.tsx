import React from "react";

const Personal = () => {
  return (
    <div>
      <h3>Complete your Purchase</h3>
      <nav>
        <h4>Personal Info</h4>
        <h4>Billing Info</h4>
        <h4>Confirm Payment</h4>
      </nav>

      <p>Name</p>
      <input type="text" placeholder="Opara Linus Ahmed" />

      <p>Email Address</p>
      <p>The purchase reciept would be sent to this address</p>
      <input type="text" placeholder="OparaLinusAhmed@devmail.com" />

      <p>Address 1</p>
      <input type="text" placeholder="The address of the user goes here" />

      <p>Address 1</p>
      <input type="text" placeholder="and here" />

      <p>Local Government</p>
      <input type="text" placeholder="Opara Linus Ahmed" />

      <p>State</p>
      <select name="pets" id="pet-select">
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Ogun">Ogun</option>
        <option value="Gombe">Gombe</option>
        <option value="Enugu">Enugu</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Kwara">Kwara</option>
      </select>

      <button>
        Next
      </button>

      <button>
        Cancel Payment
      </button>
    </div>
  );
};

export default Personal;
