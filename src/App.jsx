import { useState } from 'react'
import HowToRent from './HowToRent'
import Login from './login'
import Verify from './Verify'
import './App.css'
import Dresses from './Dresses'
import DressDetail from './DressDetail'
import Policy from './Policy'
import Summary from './Summary'

function App() {
  const [page,setPage] = useState("howToRent");
  const [user,setUser] = useState(null);
  const [selectedDress,setSelectedDress] = useState(null);
  const [rentalPeriod,setRentalPeriod]=useState({receive:"",return:""})
  const [customerInfo,setCustomerInfo]=useState({instagram:"",address:""})

  return (
    <>
    {page === "howToRent" && <HowToRent setPage={setPage}/>}
    {page === "login" && <Login setPage={setPage} setUser={setUser}/>}
    {page === "verify" && <Verify setPage={setPage}/>}
    {page === "dresses" && <Dresses setPage={setPage} setSelectedDress={setSelectedDress}/>}
    {page === "detail" && <DressDetail selectedDress={selectedDress} setPage={setPage} setRentalPeriod={setRentalPeriod} setCustomerInfo={setCustomerInfo}/>}
    {page === "policy" && <Policy setPage={setPage}/>}
    {page === "summary" && <Summary selectedDress={selectedDress} rentalPeriod={rentalPeriod} setPage={setPage} customerInfo={customerInfo}/>}
    </>
  );

}

export default App;
