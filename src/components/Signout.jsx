
import { IoLogOutOutline } from "react-icons/io5";
function Signout(){
    return(
        <div>
            <div>
                <div className="flex items-center justify-center mt-12" >
            <IoLogOutOutline size={100} />
            </div>
            
        <h2 className="text-center mt-5 text-[3em]">Oh!! You're leaving</h2>
        <h3 className="text-center mt-2 text-[1.5em]">Are you sure?</h3>
        <div className="flex justify-center items-center flex-col mt-2 gap-3">
        <div>
        <button className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white"> No!! just kidding</button>
        </div>
        <div>
        <button className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-[#eac117] text-white">Yes log me out</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export  default Signout