import { useState } from "react";
import { Link } from "react-router-dom";

function Herocard({ heading, bgImage }) {
  const [page, setPage] = useState([]);
  return (
    <>
      {/* <div className="flex mt-5 gap-3-2xl group">
        <div className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300... cursor-pointer"> */}
      <div className="w-[24%] h-[250px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 mt-10 mb-24">
        <div
          className={`${bgImage}  h-[100%] bg-no-repeat bg-cover w-[100%] flex justify-center items-center cursor-pointer`}
        >
          <Link to="/site">
            <h1 className="text-4xl text-white">{heading}</h1>
          </Link>
        </div>
      </div>
      {/* <div className="">
            <p className="pt-6 pb-6">{content}</p>
          </div> */}
      {/* </div> */}
      {/* // </div> */}
    </>
  );
}
export default Herocard;
