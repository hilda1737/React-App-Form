
 import App from './App'
import pic from '/home/student/myfirstreactapp/src/girl.jpg'
import React,{useState,useEffect} from "react";
import "./trial.css"
import User from './user';


function Forms(){
    const[email ,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [submit, setSubmitting] = useState(false)
    const handleSubmit = (event) =>{
        console.log(event)
        event.preventDefault()

        setSubmitting(true)
        const data = {
            email:email,
            password:password
        }
        setTimeout(() => {
            setSubmitting(false)
            alert(JSON.stringify(data))
        }, 5000)
       }

     return(
    <form className="Myform"onSubmit={handleSubmit} >
        <div className="eddie">
            <p><i class="fa-brands fa-airbnb"></i>Hilda Shop</p>
            </div>
            <div className="signup">
                <p>Don't have an account? <span>Sign up</span></p>
                </div> 
                <h4>Welcome back</h4>
                <div className="input">
                <label className="Email" for="firstname">Your email</label><br></br>
                <input type="email" id="emailAdress" name="email" placeholder="name@domain.com"  value={email} onChange= {(e)=>{setEmail(e.target.value)}} required></input> <br></br>
                <label className="Password">Password</label> <br></br>
                <input type="password" name="password" id="yourpassword" placeholder="atleast 8 characters"  value={password} onChange= {(e)=>{setPassword(e.target.value)}} required></input> <br></br>
               

                <div className="check">
                <input type="checkbox" id="keep" placeholder="Keep me logged in " value="Keep me logged in"></input> <br></br>
                <label className="logged">keep me logged in</label> 
                <label className="pass">forgot password?</label>
                </div>
   
                </div>

                <button className="butt" type="submit" style = {{backgroundColor: submit? "Pink" : "blue"}}>Login</button>
        
                <div className="or">
                    <p>_______________Or_______________</p>
                </div>
                <div className="media">
                    <div className="icon1">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="icon2">
                <i class="fa-brands fa-google"></i>
                </div>
                <div className="icon3">
                <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
                 
                 <div className="image">
                    <img src={pic} width="400px"></img>
          
                </div>  
     <User/> 
        </form>
        
        
    
    )
}
export default Forms;