import { useState } from "react";
function Policy({setPage}){
    const [checks, setChecks] = useState({
        p1:false, p2:false, p3:false, p4:false, p5: false,
    });

    const allChecked=Object.values(checks).every(v=>v===true);

    function toggle(key){
        setChecks({
            ...checks,
            [key]: !checks[key],

        });
    }

    return(
        <div>
            <h1>Rental Policy</h1>
            <h3>Please kindly read every policy throughly.</h3>
            <h3>By checking the box, this imply that you have agree to follow all of our policy.</h3>

            <label>
                <input type="checkbox" onChange={()=>toggle("p1")}/>
                I acknowledge that I have to pay the delivery fee by myself.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" onChange={()=>toggle("p2")}/>
                The dress have to be return by 14:00 o'clock of the return date.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" onChange={()=>toggle("p3")}/>
                Customer is responsible for any damage.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" onChange={()=>toggle("p4")}/>
                Deposit will not be refunded if policy is violated.
            </label>

            <br /><br />

            <label>
                <input type="checkbox" onChange={()=>toggle("p5")}/>
                No cancellation within the rental period.
            </label>

            <br /><br />
            <button disabled={!allChecked} onClick={()=>setPage("summary")}>
                confirm Booking
            </button>
            
        </div>
    );
}

export default Policy