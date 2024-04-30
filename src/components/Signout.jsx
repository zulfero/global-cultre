import { IoLogOutOutline } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
    const [logOutMessage, setLogOutMessage] = useState("");
    const navigate = useNavigate();
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setLogOutMessage("Logged out successfully!");
                navigate("/");
            })
            .catch((error) => {
                setLogOutMessage("An error occurred. Please try again later.");
            });
    };

    const handleCancel = () => {
        setLogOutMessage("Ohh!!! That was close!");
        navigate("/login")
    };

    return (
        <div>
            <div className="flex justify-center mt-[6em]"> 
                <div className="h-[60vh] w-[700px] bg-stone-200 border rounded-3xl shadow-lg ">
                    <div className="flex items-center justify-center mt-11">
                        <IoLogOutOutline size={100} />
                    </div>
            
                    <h2 className="text-center mt-5 text-[3em]">Oh!! You're leaving</h2>
                    <h3 className="text-center mt-2 text-[1.5em] text-stone-800">Are you sure?</h3>
                    <div className="flex justify-center items-center flex-col mt-2 gap-3">
                        
                        <div>
                            <button className="border rounded-full px-[4em] p-[1.4em] font-bold bg-stone-500 text-white" onClick={handleLogOut}>Yes, log me out</button>
                        </div>
                        <div>
                            <button className="border rounded-full  px-[5em] p-[1.4em] font-bold bg-stone-700 text-white" onClick={()=>navigate(-1)} >Cancel</button>
                        </div>
                        <p className="text-[red] text-2xl">{logOutMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signout;