import "./Formst.css"
import { useState } from "react";
import Model1 from "./Model1";
export default function RequestLoanForm() {
  const [show,setshow]= useState(false)
  const [error,seterror]=useState(null)
  
  const [data,setdata]= useState({
    name:"",
    age:"",
    loan:"",
    phone:"",
    tc:false,
    sel:"",
  })
  const btndis= data.name == "" || data.age == "" || data.phone == "";
  let claa=""
  if(btndis){
    claa="ff"
  }else{
    claa=""
  }
  function click(e){
    e.preventDefault();
    // setshow(true)
    const {age,phone}=data;
    console.log(error,"errr")
    seterror(null)
  if(age < 18 || age > 100){
    seterror("the age is not allowed")
  }else if(phone.length < 10 || phone.length > 12){
    seterror("phone number is incorrect")
  }
    setshow(true)
  console.log(data)
  
  }

    return (
      
      <div className="form-container"onClick={()=>{if(show){setshow(false)}}} >
        
        <div className="header-container" >
        <h1>Request a Loan</h1>
      </div>
        <form >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={data.name}
              onChange={(e)=>{
                setdata({...data,name: e.target.value})
                console.log(data)
              }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="number">age</label>
            <input 
              type="number" 
              id="email" 
              name="email" 
              required 
              value={data.age}
              onChange={(e)=>{
                setdata({...data,age: e.target.value})
              }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="amount">Loan Amount</label>
            <input 
              type="number" 
              id="amount" 
              name="amount" 
              required 
              value={data.loan}
              onChange={(e)=>{
                setdata({...data,loan: e.target.value})
              }}
            />
          </div>
          
          <div className="form-group">
            <label>
              <input 
                type="checkbox" 
                name="termsAccepted" 
                checked={data.tc}
              onChange={(e)=>{
                setdata({...data,tc: e.target.checked})
              }}
              />
              Accept Terms & Conditions
            </label>
          </div>
          
          <div className="form-group">
            <label htmlFor="number">phone number</label>
            <textarea 
              id="message" 
              name="message" 
              value={data.phone}
              onChange={(e)=>{
                setdata({...data,phone: e.target.value})
              }}
            />
          </div>
          <div>
            <label>salary</label>
            <select   value={data.sel}
              onChange={(e)=>{
                setdata({...data,sel: e.target.value})
              }}>
              <option>500</option>
              <option>400</option>
              <option>300</option>
            </select>
          </div>
          
          <button className={claa} onClick={click} disabled={btndis}>Submit</button>
        </form>
        
         <Model1 errormas={error} isVisible={show} />
         {console.log(show)}
         {console.log(data)}

        
              
      </div>
    );
   
  }
  