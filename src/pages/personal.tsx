import "../styles/main.css";
import {  Link} from "react-router-dom";

const Personal = () => {
  return (
    <div className="container">
      <div className="form">
        <h3>Complete your Purchase</h3>
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5 className="page">Personal Info</h5>
          </Link>
          <Link to="/billing" style={{ textDecoration: "none" }}>
            <h5>Billing Info</h5>
          </Link>
          <Link to="/confirm" style={{ textDecoration: "none" }}>
            <h5>Confirm Payment</h5>
          </Link>
        </nav>
        <div className="focus"></div>
        <section>
          <p>Name</p>
          <input type="text" placeholder="Opara Linus Ahmed" />
        </section>
        <section>
          <p className="required">Email Address</p>
          <p className="info">
            The purchase reciept would be sent to this address
          </p>
          <input type="text" placeholder="OparaLinusAhmed@devmail.com" />
        </section>
        <section>
          <p>Address 1</p>
          <input type="text" placeholder="The address of the user goes here" />
        </section>
        <section>
          <p>Address 2</p>
          <input type="text" placeholder="and here" />
        </section>
        <section className="location">
          <div>
            <p>Local Government</p>
            <input type="text" placeholder="Local Governmemt" />
          </div>
          <div>
            <p>State</p>
            <select>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Ogun">Ogun</option>
              <option value="Gombe">Gombe</option>
              <option value="Enugu">Enugu</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Kwara">Kwara</option>
            </select>
          </div>
        </section>
        <footer>
          <Link to="/billing">
            <button className="next">Next</button>
          </Link>
          <Link to='/'>
            <button className="cancel">Cancel Payment</button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Personal;
