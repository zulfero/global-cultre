import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="sticky top-0 w-full  bg-stone-200">
      <div className="container mx-auto items-center justify-between flex overflow-hidden  pb-5">
        <ul className=" cursor-pointer  flex gap-10  ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/logout">
            <li>Logout</li>
          </Link>
          <Link to="/campany">
            <li>Company</li>
          </Link>
        </ul>
        <div className="">
          <button className="border rounded-full p-6 mt-1 bg-stone-600 text-white">
            Register as a partner
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
