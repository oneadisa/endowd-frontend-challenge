// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completed from "./pages/completed";
import Billing from "./pages/billing";
import Confirm from "./pages/confirm";
import Personal from "./pages/personal";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
