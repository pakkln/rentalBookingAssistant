import {Link} from "react-router-dom"

function Verify({setPage}){
    function handleVerify(){
        setPage("dresses");
    }

    return(
        <div className="min-h-screen bg-[url('/homebg.png')] bg-cover bg-center flex items-center justify-center px-6">
      
            <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="font-title text-6xl">Verification</h1>
                </div>

                <div className="flex justify-center">
                    <p>Please upload your document here</p>
                </div>

                <br /><br />

                <div className="flex justify-center">
                    <label>
                        ID card with signature(pdf):
                        <br />
                        <input type="file"
                         className="bg-[#FFF9E0] file:rounded-full file:bg-[#8B5A2B] file:text-white file:border-none"
                        />
                    </label>

                </div>

                    <br /><br />

                <div className="flex justify-center">

                    <label>
                        Agreement document(pdf):
                        <br />
                        <input type="file" 
                        className="bg-[#FFF9E0] file:rounded-full file:bg-[#8B5A2B] file:text-white file:border-none"/>
                    </label>
                </div>

                    <br /><br />

                    <div className="flex justify-center">
                    <Link to="/dresses" className="bg-[#EDE1D7] text-[#B16848] font-bold px-6 py-3 rounded-[23px] font-serif">submit file</Link>
                    
                    </div>

                <br /><br />
            </div>
        </div>
    );
}

export default Verify