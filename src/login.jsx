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

    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center px-6">
      
        <div className="bg-[#ffffff] w-[560px] sm:w-[640px] rounded-[24px] px-6 py-10 flex flex-col">

            <div className="flex justify-center">
                <h1>Log In / Register</h1>
            </div>

            <div className="flex justify-center">
                <input placeholder="Instagram Username"
                value={instagram}
                onChange={(e)=>setInstagram(e.target.value)}/>
            </div>

                <br></br>

            <div className="flex justify-center">
                <button onClick={handleContinue}>Continue</button>
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

