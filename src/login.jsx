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
            verified: instagram === "returning_user",
        });

        if(instagram === "returning_user"){
            setPage("dresses");
        }else{
            setPage("verify");
        }
    }

    return(
        <div style={{padding:"20px"}}>
            <h1>Log In / Register</h1>

            <input placeholder="Instagram Username"
            value={instagram}
            onChange={(e)=>setInstagram(e.target.value)}/>

            <br></br>

            <button onClick={handleContinue}>Continue</button>

            <p style={{fontSize:"12px", marginTop:"10px"}}> 
                * Type <b>returning_user</b> to simulate a returning customer
            </p>
        </div>
    );
}

export default Login

