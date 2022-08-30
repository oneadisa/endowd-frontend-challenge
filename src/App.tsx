// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completed from "../components/completed";
import Billing from "../components/billing";
import Confirm from "../components/confirm";
import Personal from "../components/personal";
import NotFound from "../components/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Personal />} />
            <Route path="/" element={<Billing />} />
            <Route path="/" element={<Confirm />} />
            <Route path="/" element={<Completed />} />
            <Route path="/" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
