function Summary({ selectedDress, rentalPeriod, setPage, customerInfo}) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Summary</h1>

      {!selectedDress && <p>No booking data</p>}

      {selectedDress && (
        <>
        <p>Instagram username: {customerInfo.instagram}</p>
        
        <p>Delivery address: {customerInfo.address}</p>

        <hr />
          <img
            src={selectedDress.image}
            style={{
              width: "200px",
              height: "280px",
              objectFit: "cover",
              display: "block",
              marginBottom: "20px"
            }}
          />

          <p><b>Dress:</b> {selectedDress.name}</p>

          <p>
            <b>Rental period:</b><br />
            {rentalPeriod.receive} → {rentalPeriod.return}
          </p>

          <hr />

          <p>
            Please send this booking summary to the shop via Instagram or Line.
          </p>
          <br /> <br />
          <p>Line: @LuneRental</p>

          <button onClick={() => setPage("howToRent")}>
            Back to Home
          </button>
        </>
      )}
    </div>
  )
}

export default Summary
