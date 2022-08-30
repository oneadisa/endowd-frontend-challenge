import "../styles/main.css";

const Billing = () => {
  return (
    <div className="container">
      <div className="form">
        <h3>Complete your Purchase</h3>
        <nav>
          <h5>Personal Info</h5>
          <h5 className="page">Billing Info</h5>
          <h5>Confirm Payment</h5>
        </nav>
        <div className="focus-1"></div>
        <section>
          <p className="required">Name on Card</p>
          <input type="text" placeholder="Opara Linus Ahmed" />
        </section>
        <section className="card-type">
          <p className="required">Card Type</p>
          <select name="pets" id="pet-select" value="Visa">
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Verve">Verve</option>
            <option value="American Express">American Express</option>
          </select>
        </section>
        <section className="card-details">
          <div>
            <p className="required">Card Details</p>
            <input
            className='card-number'
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              // maxLength="19"
              placeholder="44960 44960 44960 44960"
            />
          </div>
          <div>
            <p className="required">Expiry Date</p>
            <input
            className='expiry'
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength={5}
              placeholder="MM  /  YY"
            />
          </div>
          <div>
            <p className="required">CVV</p>
            <input className='cvv' type="number" placeholder='923' />
          </div>
        </section>
        <footer>
          <button className="next">Next</button>

          <button className="cancel">Cancel Payment</button>
        </footer>
      </div>
    </div>
  );
};

export default Billing;
