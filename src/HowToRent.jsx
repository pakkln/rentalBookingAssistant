function HowToRent({ setPage }) {
  return (
    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center px-6">
      
      <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10">
        
        <div className="flex justify-center">
            <div className="inline-block text-center">
              <h1 className="text-4xl font-calligraphy text-[#000000]">
                how to rent
              </h1>
              <hr className="mt-2 border-black" />
            </div>
          </div>



        <div className="flex justify-center">
          <ol className="list-decimal list-inside space-y-3 text-[#000000] text-left text-sm">
            <li>Select dress</li>
            <li>Browse availability</li>
            <li>Select rental dates</li>
            <li>Confirm rental policy</li>
            <li>Confirm booking</li>
          </ol>
        </div>

        
        <div className="flex justify-center">
          <button
            onClick={() => setPage("login")}
            className="bg-[#000000] text-[#ffffff] font-bold px-16 py-6 rounded-[23px] border-0 outline-none focus:outline-none"
          >
            start renting
          </button>
        </div>

        

        <br /><br />
      </div>
    </div>
  );
}

export default HowToRent;
