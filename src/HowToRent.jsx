import { Link } from "react-router-dom";

function HowToRent() {
  return (
    <div className="min-h-screen bg-[url('/homebg.png')] bg-cover bg-center flex items-center justify-center px-6">
      <div className="bg-white w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10">
        <div className="text-center">
          <h1 className="font-title text-6xl font-bold text-black">How To Rent</h1>

          <hr className="mt-2 border-black" />

          <div className="flex justify-center mt-8">
          <ol className="font-serif list-decimal list-inside space-y-3 text-black text-left text-sm mt-6">
            <li>Select dress</li>
            <li>Browse availability</li>
            <li>Select rental dates</li>
            <li>Confirm rental policy</li>
            <li>Confirm booking</li>
          </ol>
          </div>

          <hr className="mt-6 border-black" />
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/login"
            className="bg-[#EDE1D7] text-[#B16848] font-bold px-6 py-3 rounded-[23px] font-serif"
          >
            start renting
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowToRent;
