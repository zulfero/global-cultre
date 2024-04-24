import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";
import {collection,addDoc} from "firebase/firestore"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Register() {


  const navigate= useNavigate()
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
 
  const [signUpErroMassage,setSignUpErrorMessage]=useState("")
  const [errorPassword,setErrorPassword]=useState("")
  
   


  const handleRegister=async(e)=>{
e.preventDefault()

console.log(formData)
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
  // console.log(formData)
  setErrorMessage("")
   createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userData) => {
    const user = userData.user;

console.log(user)


  setSignUpErrorMessage("LogIn Successfully")
    navigate("/login")

    
  })
  .catch((error) => {
   console.log(error)
  });
  const details= await addDoc(collection(db,"users"),formData)

  console.log(details)
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
          
            <p className="text-[red] text-2xl">{errorMessage}</p>
            <p className="text-[red] text-2xl">{signUpErroMassage}</p>
          <div className="flex justify-center" >
            <button
              className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white "
              onClick={e=>handleRegister(e)}
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
