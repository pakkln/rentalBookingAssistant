import {useState} from "react";

function Login({setPage,setUser}){
    const[instagram,setInstagram]=useState("");

    function handleContinue(){
        if(!instagram){
            alert("Please enter Instagram username");
            return;
        }

        setUser({
            instagram,
            verified: instagram === "oldUser",
        });

        if(instagram === "oldUser"){
            setPage("dresses");
        }else{
            setPage("verify");
        }
    }

    return(

    <div className="min-h-screen bg-[url('/homebg.png')] bg-cover bg-center flex items-center justify-center px-6">
      
        <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10 flex flex-col">

            <div className="font-title text-5xl flex justify-center">
                <h1>Log In / Register</h1>
            </div>

            <br/>

            <div className="flex justify-center">
                <input placeholder="Instagram Username"
                value={instagram}
                onChange={(e)=>setInstagram(e.target.value)}
                className="border border-gray rounded-md px-20 py-2"
                />
            </div>

                <br></br>

            <div className="flex justify-center">
                <button onClick={handleContinue} 
                className="bg-[#EDE1D7] text-[#B16848] text-sm font-bold px-3 py-2 rounded-[23px] border-none font-serif">
                    Continue
                </button>
            </div>

            <div className="flex justify-center">
                <p style={{fontSize:"12px", marginTop:"10px"}}> 
                    * Type <b>oldUser</b> to simulate a returning customer
                </p>
            </div>
        </div>
    </div>
    );
}

export default Login

