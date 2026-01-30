function Summary({ selectedDress, rentalPeriod, setPage, customerInfo }) {
  return (
    <div className="min-h-screen flex justify-center px-5 py-6">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>

        {!selectedDress && (
          <p>No booking data</p>
        )}

        {selectedDress && (
          <>
            <p className="mb-2">
              <b>Instagram username:</b> {customerInfo.instagram}
            </p>

            <p className="mb-4">
              <b>Delivery address:</b> {customerInfo.address}
            </p>

            <hr className="w-full my-4" />

            <img
              src={selectedDress.image}
              alt={selectedDress.name}
              className="w-[200px] h-[280px] object-cover mb-4"
            />

            <p className="mb-2">
              <b>Dress:</b> {selectedDress.name}
            </p>

            <p className="mb-4">
              <b>Rental period:</b><br />
              {rentalPeriod.receive} → {rentalPeriod.return}
            </p>

            <hr className="w-full my-4" />

            <p className="mb-2">
              Please send this booking summary to the shop via Instagram or Line.
            </p>

            <p className="mb-6">
              <b>Line:</b> @LuneRental
            </p>

            <button
              onClick={() => setPage("howToRent")}
              className="bg-black text-white rounded-md px-6 py-2 hover:opacity-90"
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Summary;
