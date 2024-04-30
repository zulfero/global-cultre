import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseStorage";
import { collection, addDoc } from "firebase/firestore";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import loader from "../images/loader.gif";

function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [emailError, setEmail] = useState("");

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();

    console.log(formData);
    if (formData.companyName === "") {
      setErrorMessage("Kindly fill in the company name");
    } else if (formData.email === "") {
      setErrorMessage("Kindly fill in the email address");
    } else if (formData.phoneNumber === "") {
      setErrorMessage("Kindly fill in the phone number");
    } else if (formData.city === "") {
      setErrorMessage("Kindly fill in the city");
    } else if (formData.password === "") {
      setErrorMessage("Kindly fill in the password");
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMessage("password doesn't match");
    } else if (formData.password.length < 6) {
      setErrorMessage("minimum length is 6 character");
    } else {
      // console.log(formData)
      setErrorMessage("");
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userData) => {
          const user = userData.user;

          console.log(user);

          // alert("Successfully Registered")
          navigate("/login");
        })

        .catch((error) => {
          //  console.log(error)
          // console.log(error)
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("An account with that emaill already exists");
          }
        });
      setLoading(false);
      const details = await addDoc(collection(db, "users"), formData);
      const [loading, setLoading] = useState(false);
      console.log(details);
    }
  };
  return (
    <>
      <div className="container mx-auto flex flex-1 gap-9">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-10 justify-between ">
            <h2 className="font-bold text-6xl mt-8 ">Create Your Account</h2>

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
            <div className="flex border-2  justify-between px-4 py-5 text-center shadow-xl outline-none">
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                className="outline-none"
                onChange={handleChange}
              />
              <div className="flex gap-2" onClick={handleShowPassword}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            <div className="flex border-2  justify-between px-4 py-5 text-center shadow-xl outline-none">
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Cornfirm Password"
                name="confirmPassword"
                className="outline-none"
                onChange={handleChange}
              />
              <div className="flex gap-2" onClick={handleShowPassword}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>

            <p className="text-[red] text-2xl">{errorMessage}</p>
            <div className="flex justify-center">
              <button
                className="border rounded-full px-[4em] p-[1.4em] font-bold bg-stone-700 text-white "
                onClick={(e) => handleRegister(e)}
              >
                Create Account
              </button>
            </div>
            {loading && <img src={loader} />}
            <div className="flex justify-center text-[20px] mb-8">
              Already have an Account ?
              <a href="/login" className="text-stone-500">
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
