import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Auth } from "firebase/auth";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

function Register() {
  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
const [errorMessage, setErrorMessage]=useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  
  const handleSignUp=()=>{
    if(formData.companyName===""){
      setErrorMessage("Kindly fill in the company name")
    }
    else if(formData.email===""){
      setErrorMessage("Kindly fill in the email address")
    }
    else if(formData.phoneNumber===""){
      setErrorMessage("Kindly fill in the phone number")
    }
    else if(formData.city===""){
      setErrorMessage("Kindly fill in the city")
    }
    else if(formData.password===""){
      setErrorMessage("Kindly fill in the password")
    }
    else if(formData.password!==formData.confirmPassword){
      setErrorMessage("password doesn't match")
    }
  
  
    else{
      setErrorMessage("")
      console.log("signing up")
      console.log(formData);

    }

   
  }

  return (
    <>
      <div className="container mx-auto flex flex-1 gap-9">
        <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-10 justify-between ">
          <h2 className="font-bold text-6xl mt-8 text-[#Eac117]">
            Create Your Account
          </h2>

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="border-2  px-4 py-5 shadow-xl outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="border-2 px-4 py-5 items-center shadow-xl outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            className="border-2 px-4 py-5 items-center shadow-xl outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            className="border-2 px-4 py-5 items-center shadow-xl outline-none"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Password"
            name="password"
            className="border px-4 py-5 shadow-xl outline-none"
            onChange={handleChange}
          />
          
          <input
            type="text"
            placeholder="Cornfirm Password"
            name="confirmPassword"
            className="border px-4 py-5 shadow-xl outline-none"
            onChange={handleChange}
          />
          
            <p className="text-[red]">{errorMessage}</p>
          <div className="flex justify-center"  onClick={handleSignUp}>
            <button
              className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white "
              
            >
              Create Account
            </button>
          </div>
         < div className="flex justify-center text-[20px] mb-8">
              Already have an Account ?
              <a href="/login" className="text-[#EAC117]">
                Login
              </a>
            </div>
        </div>

        
      
      <div className="w-[50%]">
        <img
          src="src/images/af4c5300-315b-46c7-8786-b704810b21cf.jpeg"
          className="w-[100%] h-[100vh]"
        />
      </div>
      </div>
      </div>
    </>
  );
}
export default Register;
