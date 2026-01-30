import { useState } from "react";

function DressDetail({ selectedDress, setPage, setRentalPeriod, setCustomerInfo }) {
  const [receiveDate, setReceiveDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [instagram, setInstagram] = useState("");
  const [address, setAddress] = useState("");

  function checkAvailability() {
    if (!instagram) {
      alert("Please enter Instagram username");
      return;
    }

    if (!address) {
      alert("Please enter address");
      return;
    }

    if (!receiveDate || !returnDate) {
      alert("Please select both receive and return date");
      return;
    }

    setIsAvailable(true);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dress Detail</h1>

      {!selectedDress && <p>No dress selected</p>}

      {selectedDress && (
        <>
          <img
            src={selectedDress.image}
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              display: "block",
              marginBottom: "20px"
            }}
          />

          <h2>{selectedDress.name}</h2>

          <hr />

          <label>
            Receive date
            <br />
            <input type="date" value={receiveDate}
              onChange={(e) => setReceiveDate(e.target.value)} />
          </label>

          <br /><br />

          <label>
            Return date
            <br />
            <input type="date" value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)} />
          </label>

          <br /><br />

          <label>
            Instagram username
            <br />
            <input type="text" value={instagram}
              onChange={(e) => {
                setInstagram(e.target.value)
                setCustomerInfo(prev => ({
                  ...prev,
                  instagram: e.target.value
                }))
              }} />
          </label>

          <br /><br />

          <label>
            Delivery address
            <br />
            <textarea rows="3" value={address}
              onChange={(e) => {
                setAddress(e.target.value)
                setCustomerInfo(prev => ({
                  ...prev,
                  address: e.target.value
                }))
              }} />
          </label>

          <br /><br />

          <button onClick={checkAvailability}>
            Check availability
          </button>

          <br /><br />

          {isAvailable === true && (
            <>
              <p style={{ color: "green" }}>Dress available</p>
              <button onClick={() => {
                setRentalPeriod({
                  receive: receiveDate,
                  return: returnDate
                })
                setPage("policy")
              }}>
                Book
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default DressDetail;
