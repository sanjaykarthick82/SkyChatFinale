import './Login.css'
import assets from '../../assets/assets'
import { useState } from 'react'
import{signup,login,resetPass} from '../../config/firebase'

const Login = () => {
    const [currState,setCurrState]=useState("Sign up");
    const [userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if(currState==="Sign up"){
            signup(userName,email,password);
        }
        else{
            login(email,password)
        }
    }
  return (

    <div>
<div className="login">
    <img src={assets.logo_big} alt="" className="logo"/>
    <form  onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
     {currState=== "Sign up"?<input onChange={(e)=>setUserName(e.target.value)} value={userName}type="text" placeholder='username' className="form-input" required />:null}
        <input onChange={(e)=>setEmail(e.target.value)} value={email}type="email" placeholder='Email Address' className="form-input" required />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter Password'className="form-input" required/>
        <button type='submit'>{currState === "Sign up"?"Create Account":"Login Now"}</button>
        <div className="login-term">
           
         
        </div>
        <div className="login-forgot">
            {
                currState ==="Sign up"
                ?            <p className="login-toggle">Already have an account<span onClick={()=>setCurrState("Login")}> Login Here</span></p>
                :            <p className="login-toggle">Create an Account raa<span onClick={()=>setCurrState("Sign up")}> Click Here</span></p>

            }
{currState === "Login" ?<p className="login-toggle">Forgot Password? <span onClick={() => resetPass(email)}>Reset Here</span></p>:null}
        </div>

    </form>
</div>

    </div>
  )
}

export default Login
