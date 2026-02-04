import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DressDetail({ selectedDress, setRentalPeriod, setCustomerInfo }) {
  const navigate = useNavigate();

  const [receiveDate, setReceiveDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [instagram, setInstagram] = useState("");
  const [address, setAddress] = useState("");

  if(!selectedDress){
    return(
      <div className="min-h-screen flex items-center justify-center">
        No dress selected. Please return to the dresses page to choose a dress.</div>
    );
  }

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
        <button
        onClick={() => navigate("/dresses")}
        style={{
          marginBottom: "12px",
          background: "none",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
        <h1 className="text-2xl mb-4 flex justify-center font-serif font-bold text-2xl">Dress Detail</h1>

        <br/>


        {selectedDress && (
          <>
            <img
              src={selectedDress.image}
              className="w-[300px] h-[400px] object-cover block mx-auto mb-5 rounded-lg"  
            />

            <h2 className="text-xl font-serif font-bold mb-2">
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
          <div className="flex justify-center gap-4">
            <button
              onClick={checkAvailability}
              className="bg-[#EDE1D7] text-[#B16848] text-sm font-bold px-3 py-2 rounded-[23px] border-none"
            >
              Check availability
            </button>

            <div className="flex justify-center">
                <p className="text-black mt-4">status: </p>
                </div>

            <hr/>

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
                    navigate("/policy");
                  }}
                  className="bg-[#000000] text-[#ffffff] rounded-[23px] rounded-md py-2 px-4 hover:opacity-90"
                >
                  Book
                </button>
                </div>
              </>
            )}
          </div>

            
          </>
        )}
      </div>
    </div>
  );
}

export default DressDetail;
