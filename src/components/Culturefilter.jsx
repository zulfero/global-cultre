import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
function  Culture(){
    return (
      <div className="container mx-auto">
        <div className="flex items-center border  px-6 gap-3 mt-6 w-[80%] mx-auto justify-between py-2">
          <div className="flex items-center gap-4 w-[100%] border-r-2 border-r-gray-400">
            <IoSearch size={30} />
            <input
              className="text-[1.2rem] py-3 px-2 w-[100%]
            "
              type="text"
              placeholder="Search Products and Categories"
            />
          </div>
          <div className="flex items-center  px-[5em]">
            <select className="px-2 select outline-none">
              <option value="">Filter Category</option>
              <option value="">Luos</option>
              <option value="">Luyah</option>
              <option value="">kikuyu</option>
              <option value="">Kambas</option>
              <option value="">Klenjin</option>
              <option value="">Mijikenda</option>
              <option value="">Kisii</option>
              <option value="">Maasai</option>
            </select>
            <RiArrowDropDownLine size={60} />
          </div>
        </div>
      </div>
    );
  }
  export default Culture;








