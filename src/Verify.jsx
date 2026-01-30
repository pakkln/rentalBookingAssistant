function Verify({setPage}){
    function handleVerify(){
        setPage("dresses");
    }

    return(
        <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center px-6">
      
            <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10 flex flex-col">
                <div className="flex justify-center">
                    <h1>Verification</h1>
                </div>

                <div className="flex justify-center">
                    <p>Please upload your document here</p>
                </div>

                <div className="flex justify-center">
                    <label>
                        ID card with signature(pdf):
                        <br />
                        <input type="file" />
                    </label>

                </div>

                    <br /><br />

                <div className="flex justify-center">

                    <label>
                        Agreement document(pdf):
                        <br />
                        <input type="file" />
                    </label>
                </div>

                    <br /><br />

                    <div className="flex justify-center">
                    <button onClick={handleVerify}>Verify Account</button>
                    
                    </div>

                <br /><br />
            </div>
        </div>
    );
}

export default Verify