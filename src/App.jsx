import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import HowToRent from "./HowToRent";
import Login from "./login";
import Verify from "./Verify";
import Dresses from "./Dresses";
import DressDetail from "./DressDetail";
import Policy from "./Policy";
import Summary from "./Summary";

function App() {
  const [user, setUser] = useState(null);
  const [selectedDress, setSelectedDress] = useState(null);
  const [rentalPeriod, setRentalPeriod] = useState({
    receive: "",
    return: "",
  });
  const [customerInfo, setCustomerInfo] = useState({
    instagram: "",
    address: "",
  });

  return (
    <Routes>
      <Route path="/" element={<HowToRent />} />
      <Route path="/howtorent" element={<HowToRent />} />

      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/verify" element={<Verify />} />

      <Route
        path="/dresses"
        element={<Dresses setSelectedDress={setSelectedDress} />}
      />

      <Route
        path="/detail"
        element={
          selectedDress ? (
            <DressDetail
              selectedDress={selectedDress}
              setRentalPeriod={setRentalPeriod}
              setCustomerInfo={setCustomerInfo}
            />
          ) : (
            <Navigate to="/dresses" />
          )
        }
      />

      <Route path="/policy" element={<Policy />} />

      <Route
        path="/summary"
        element={
          selectedDress ? (
            <Summary
              selectedDress={selectedDress}
              rentalPeriod={rentalPeriod}
              customerInfo={customerInfo}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
