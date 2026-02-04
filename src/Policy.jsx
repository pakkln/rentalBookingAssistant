import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Policy({setPage}){
    const [checks, setChecks] = useState({
        p1:false, p2:false, p3:false, p4:false, p5: false,
    });

    const allChecked=Object.values(checks).every(v=>v===true);
    const navigate = useNavigate();

    function toggle(key){
        setChecks({
            ...checks,
            [key]: !checks[key],

        });
    }

    return(
    <div className="min-h-screen bg-[url('/homebg.png')] flex items-center justify-center px-6">
      
      <div className="bg-[#ffffff] w-[700px] sm:w-[800px] rounded-[24px] px-6 py-10 border-[40px] border-[#ffffff]">
            <div className="font-title text-6xl  flex justify-center">
            <h1>Rental Policy</h1>
            </div>
            
            <h3 className="text-sm text-[#737373]">Please kindly read every policy throughly.</h3>
            <h3 className="text-sm text-[#737373]">By checking the box, this imply that you have agree to follow all of our policy.</h3>

            <br/>

            <hr/>

            <br/>

            <label>
                <input type="checkbox" checked={checks.p1} onChange={()=>toggle("p1")} />
                I acknowledge that I have to pay the delivery fee by myself.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" checked={checks.p2} onChange={()=>toggle("p2")}/>
                The dress have to be return by 14:00 o'clock of the return date.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" checked={checks.p3} onChange={()=>toggle("p3")}/>
                Customer is responsible for any damage.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" checked={checks.p4} onChange={()=>toggle("p4")}/>
                Deposit will not be refunded if policy is violated.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" checked={checks.p5} onChange={()=>toggle("p5")}/>
                No cancellation within the rental period.
            </label>

            <br /><br />

            <div className="flex justify-center ">
            <button disabled={!allChecked} onClick={()=>navigate("/summary")} 
                className={`text-sm font-bold px-4 py-2 rounded-[23px] transition
                    ${
                allChecked 
                ? "bg-[#EDE1D7] text-[#B16848] hover:scale-105 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
                `}
            >
                confirm booking
            </button>
            </div>
            
        </div>
     </div>
    );
}

export default Policy