import { Link } from "react-router-dom";

function Herocard({ heading, bgImage }) {
  return (
    <>
      <div className="h-[250px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 mt-10 mb-24  w-[250px]">
        <Link to="/site">
          <div
            className={`${bgImage}  h-[100%] bg-no-repeat bg-cover w-[100%] flex justify-center items-center cursor-pointer rounded-xl`}
          >
            <h1 className="text-4xl text-white">{heading}</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Herocard;
