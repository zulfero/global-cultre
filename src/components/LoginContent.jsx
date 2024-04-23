import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

function LoginContent(){
  const [showPassword, setShowPassword] = useState(true);
  function handleShowPassord(){
    setShowPassword(prev=>!prev)
  }
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
  });
  const [errorMessage, setErrorMessage]=useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignIn=()=>{
    
    if(formData.email===""){
      setErrorMessage("Kindly fill in the email address")
    }
   
    
    else if(formData.password===""){
      setErrorMessage("Kindly fill in the password")
    }
    
  
  
    else{
      setErrorMessage("")
      console.log("signing")
      console.log(formData);

    }
  
  }
    return(
        <>
        <div className="w-[100%] flex gap-[2em]">
          <div className="w-[50%]">
            <img src="src/images/African couple with a baby in traditional ethnic vector image on VectorStock (3).jpeg"className="w-[100%] h-[90vh]" />
          </div>
          <div className="w-[40%] flex flex-col gap-[4em] my-[2em]">
            <h1 className="flex justify-center text-[3em] font-bold text-[#EAC117]">
              Login to your Account
            </h1>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="border-2  px-[5em] py-8  shadow-xl outline-none"
              onChange={handleChange}
            />
            <div className="flex border-2  justify-between px-[5em] py-8 shadow-xl outline-none">
              <input type={showPassword?"password":"text"}placeholder="Password"  name="password" className="outline-none" onChange={handleChange} />
              <div className="flex gap-2" onClick={handleShowPassord}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2"/>
              <p>Remember me</p>
              </div>
              <div>
              <p className=" text-[20px] underline underline-offset-2">Forgot Password ?</p>
              </div>
            </div>
            <p className="text-[red]">{errorMessage}</p>
            <div className="flex justify-center " onClick={handleSignIn}>
            <button className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white">
              Sign In
            </button>
            </div>
            <div className="flex justify-center text-[20px]">
              Dont Have An Account Yet ?  
              <a href="/register" className="text-[#EAC117]">
                  Register 
              </a>
            </div>
          </div>
          
        </div>
      </>
    )
}
export default LoginContent