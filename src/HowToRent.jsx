function HowToRent({ setPage }) {
  return (
    <div className="min-h-screen bg-[#A52A2A] flex items-center justify-center px-6">
      
      
      <div className="relative bg-[#FFF9ED] h-auto w-auto rounded-[24px]">

        
        <div className="relative z-10">
          
          {/* Header */}
          <h1 className="text-4xl font-calligraphy text-[#D00F2D] text-center mb-10">
            how to rent
          </h1>

          {/* List (centered block, left text) */}
          <div className="flex justify-center">
            <ol className="list-decimal list-inside space-y-4 text-[#D00F2D] text-left">
              <li>Select dress</li>
              <li>Browse availability</li>
              <li>Select rental dates</li>
              <li>Confirm rental policy</li>
              <li>Confirm booking</li>
            </ol>
          </div>

          
          
            <button
              onClick={() => setPage("login")}
              className="text-white bg-[#D00F2D]  rounded-full text-sm hover:opacity-90 transition"
            >
              start renting
            </button>

        </div>
      </div>
    </div>
  );
}

export default HowToRent
