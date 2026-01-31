import { useState } from "react";

function DressDetail({ selectedDress, setPage, setRentalPeriod, setCustomerInfo }) {
  const [receiveDate, setReceiveDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [instagram, setInstagram] = useState("");
  const [address, setAddress] = useState("");

  function checkAvailability() {

    if (!receiveDate || !returnDate) {
      alert("Please select both receive and return date");
      return;
    }

    if (!instagram) {
      alert("Please enter Instagram username");
      return;
    }

    if (!address) {
      alert("Please enter address");
      return;
    }

    setIsAvailable(true);
  }

  return (
    <div className="min-h-screen flex justify-center px-5 py-6">
      <div className="w-full max-w-[700px]">
        <h1 className="text-2xl font-bold mb-4 flex justify-center">Dress Detail</h1>

        {!selectedDress && (
          <p>No dress selected</p>
        )}

        {selectedDress && (
          <>
            <img
              src={selectedDress.image}
              className="w-[300px] h-[400px] object-cover block mx-auto mb-5"
            />

            <h2 className="text-xl font-semibold mb-2">
              {selectedDress.name}
            </h2>

            <hr className="my-4" />

            <label className="block mb-4">
              <span className="block mb-1">Receive date</span>
              <input
                type="date"
                value={receiveDate}
                onChange={(e) => setReceiveDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </label>

            <br/> 

            <label className="block mb-4">
              <span className="block mb-1">Return date</span>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </label>

            <br/>

            <label className="block mb-4">
              <span className="block mb-1">Instagram username</span>
              <input
                type="text"
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                  setCustomerInfo(prev => ({
                    ...prev,
                    instagram: e.target.value
                  }));
                }}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </label>

            <br/> 

            <label className="block mb-4">
              <span className="block mb-1">Delivery address</span>
              <textarea
                rows="3"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setCustomerInfo(prev => ({
                    ...prev,
                    address: e.target.value
                  }));
                }}
                className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none"
              />
            </label>

            <br/> 
          <div className="flex justify-center">
            <button
              onClick={checkAvailability}
              className="bg-[#000000] text-[#ffffff] rounded-[23px] rounded-md py-2 px-4 hover:opacity-90"
            >
              Check availability
            </button>
          </div>

            {isAvailable === true && (
              <>
                <div className="flex justify-center">
                <p className="text-[#00B802] mt-4">Dress available</p>
                </div>

                <div className="flex justify-center">
                <button
                  onClick={() => {
                    setRentalPeriod({
                      receive: receiveDate,
                      return: returnDate
                    });
                    setPage("policy");
                  }}
                  className="bg-[#000000] text-[#ffffff] rounded-[23px] rounded-md py-2 px-4 hover:opacity-90"
                >
                  Book
                </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DressDetail;
