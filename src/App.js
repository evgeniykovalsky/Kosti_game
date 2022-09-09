import React,{useState,useEffect} from "react";
import RandomOrg from "random-org";
import Numbers from "./components/Numbers";
import './style.css';
let count=0;
function App() {

  const [value,setValue]=useState([]);
 
  const [amountValue,setAmount]=useState(0);
 

  useEffect(()=>{
    let random = new RandomOrg({ apiKey: '9ae76645-837a-4a95-9b3e-8fe9cc1bb9e6' });
    random.generateIntegers({ min: 1, max: 6, n: 4 })
    .then(function(result) {
           
       setValue(result.random.data);
    });
},[amountValue]);
   
return (
  <>


  <h1>Игра в кости</h1>
  <div className="res">

  <Numbers key={Math.random (). toString (36) .substr (2, 9)} data={value} />

   <button onClick={()=>{count++;setAmount(count)}}>Бросить кости {count} </button>
  
  </div>
  </>
 );

}


export default App;
