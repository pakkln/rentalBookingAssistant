function Verify({setPage}){
    function handleVerify(){
        setPage("dresses");
    }

    return(
        <div style={{padding:"20px"}}>
            <h1>Verification</h1>

            <p>Please upload your document here</p>

            <label>
                ID card with signature(pdf):
                <br />
                <input type="file" />
            </label>

            <br /><br />

            <label>
                Agreement document(pdf):
                <br />
                <input type="file" />
            </label>

            <br /><br />

            <button onClick={handleVerify}>Verify Account</button>

        </div>
    );
}

export default Verify