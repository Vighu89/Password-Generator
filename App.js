import './App.css';
import { useState } from 'react';
import {UC} from './Data/data';
import {SC} from './Data/data';
import {NC} from './Data/data';
import {LC} from './Data/data';
function App() {
  let [uppercase,setuppercase] = useState(false);
  let [lowercase,setlowercase] = useState(false);
  let [numbercase,setnumbercase] = useState(false);
  let [symbolcase,setsymbolcase] = useState(false);
  let [passwordlen,setpassleng] = useState(10);
  let [fpass,setfpass] = useState('')

  let finalpass=''
  let charset = ''
  let createpassword = ()=>{
    if(uppercase || lowercase || numbercase || symbolcase){
      if (uppercase) charset += UC;
      if(lowercase) charset += LC;
      if(numbercase) charset += NC;
      if(symbolcase) charset += SC;
      for( let i=0;i<passwordlen;i++){
        finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setfpass(finalpass)
    }
    else{
      alert("Tick one check box")
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
   <>
   <div className="password-box">
    <h2>Password Generator</h2>
    <div className="passwordin">
    <input type="text" readOnly value={fpass}/><button onClick={copypass}>Copy</button>
    </div>

    <div className="passlength">
      <label>Password Length</label>
      <input type="number" max={20} min={10} value = {passwordlen} onChange={(event)=>setpassleng(event.target.value)}/>
    </div>

    <div className = "pass">
      <label>UpperCase</label>
      <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)}/>
    </div>

    <div className = "pass">
      <label>LowerCase</label>
      <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
    </div>

    <div className = "pass">
      <label>Numbers</label>
      <input type="checkbox" checked={numbercase} onChange={()=>setnumbercase(!numbercase)}/>
    </div>

    <div className = "pass">
      <label>Symbols</label>
      <input type="checkbox" checked={symbolcase} onChange={()=>setsymbolcase(!symbolcase)}/>
    </div>
    <button className = "btn" onClick={createpassword}>Generate Password</button>
   </div>
  
   </>
  );
}

export default App;
