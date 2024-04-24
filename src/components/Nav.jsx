import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="sticky top-0 w-full bg-stone-200">
      <div className="container mx-auto items-center justify-between flex  pb-5">
        <ul className=" cursor-pointer  flex gap-10  ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Log in</li>
          </Link>
          <button className="">Registration</button>
          <button>Log Out</button>
        </ul>
        <div className="">
          <button className="border rounded-full p-6 mt-1 bg-stone-700 text-white">
            Register as a partner
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
