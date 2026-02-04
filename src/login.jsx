import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [instagram, setInstagram] = useState("");
  const navigate = useNavigate();

  function handleContinue() {
    if (!instagram) {
      alert("Please enter Instagram username");
      return;
    }

    const isOldUser = instagram === "oldUser";

    setUser({
      instagram,
      verified: isOldUser,
    });

    if (isOldUser) {
      navigate("/dresses");
    } else {
      navigate("/verify");
    }
  }

  return (
    <div className="min-h-screen bg-[url('/homebg.png')] bg-cover bg-center flex items-center justify-center px-6">
      <div className="bg-white w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10 flex flex-col">
        <div className="text-center">
          <h1 className="font-title text-5xl font-bold">Log In / Register</h1>
        </div>

        <div className="flex justify-center mt-8">
          <input
            placeholder="Instagram Username"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="border border-gray-300 rounded-md px-6 py-2 w-full max-w-sm"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleContinue}
            className="bg-[#EDE1D7] text-[#B16848] text-sm font-bold px-6 py-3 rounded-[23px] font-serif"
          >
            Continue
          </button>
        </div>

        <p className="text-xs text-center mt-4">
          * Type <b>oldUser</b> to simulate a returning customer
        </p>
      </div>
    </div>
  );
}

export default Login;
