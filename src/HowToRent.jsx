function HowToRent({ setPage }) {
  return (
    <div className="min-h-screen bg-[url('/homebg.png')] bg-cover bg-center flex items-center justify-center px-6">
      
      <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10">
        
        <div className="flex justify-center">
            <div className="inline-block text-center">
              
            <h1 className="font-title text-6xl text-black">
                How to rent
            </h1>


              <hr className="mt-2 border-black" />
            
            <br />
        
          <ol className="font-serif list-decimal list-inside space-y-3 text-[#000000] text-left text-sm">
            <li>Select dress</li>
            <li>Browse availability</li>
            <li>Select rental dates</li>
            <li>Confirm rental policy</li>
            <li>Confirm booking</li>
          </ol>

          <br/>
        

        <hr className="mt-2 border-black" />
      </div>
    </div>

    <br/>

        
        <div className="flex justify-center">
          <button
            onClick={() => setPage("login")}
            className="bg-[#EDE1D7] text-[#B16848] font-bold px-6 py-3 rounded-[23px] border-none font-serif"
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
