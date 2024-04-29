import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginContent() {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true); 

    if (formData.email === "") {
      setErrorMessage("Kindly fill in the email address");
      setLoading(false);
    } else if (formData.password === "") {
      setErrorMessage("Kindly fill in the password");
      setLoading(false);
    } else {
      setErrorMessage("");
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userData) => {
          const user = userData.user;
          console.log(user);
          setLoading(false); 
          navigate("/adminform");
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setLoginErrorMessage("Invalid password");
          } else {
            setLoginErrorMessage("Invalid Email or Password");
          }
          setLoading(false); 
        });

      try {
        const details = await addDoc(collection(db, "users"), formData);
        console.log(details);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <>
      <div className="w-[100%] flex gap-[2em]">
        <div className="w-[50%]">
          <img src="src/images/African couple with a baby in traditional ethnic vector image on VectorStock (3).jpeg" className="w-[100%] h-[90vh]" />
        </div>
        <div className="w-[40%] flex flex-col gap-[4em] my-[2em]">
          <h1 className="flex justify-center text-[3em] font-bold">
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
          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Remember me</p>
            </div>
            <div>
              <p className=" text-[20px] underline underline-offset-2">Forgot Password ?</p>
            </div>
          </div>
          <p className="text-[red] text-2xl">{errorMessage}</p>
          <p className="text-[red] text-2xl">{loginErrorMessage}</p>

          <div className="flex justify-center ">
            <button className="border rounded-full px-[4em] p-[1.4em] font-bold bg-stone-700 text-white" onClick={(e) => handleSignIn(e)}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
          <div className="flex justify-center text-[20px]">
            Don't Have An Account Yet ?  
            <a href="/register" className="text-stone-500">
              Register 
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginContent;
