function Register(){
    return(
        <>
        <div className="container mx-auto flex flex-1 gap-9">
        <div className="flex flex-col gap-10 ">
      <h2 className="font-bold text-6xl mt-8 text-[#Eac117]">Create Your Account</h2>
      <div className="flex gap-3">
      <input type="text" placeholder="First Name" className="border-2 px-4 py-3 items-center"/>
      <input type="text" placeholder="Last Name" className="border-2 px-4 py-3 items-center"/>
      </div>
      <input
              type="text"
              placeholder="Email Address"
              className="border-2  px-[5em] py-6 "
            />
      <input type="text" placeholder="Password" className="border  px-[4em] py-6"/>
    
      <input type="text" placeholder="Cornfirm Password" className="border px-[4em] py-6  "/>
      
      <div className="flex justify-center">
      <button className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white">Create Account</button>
      </div>
      {/* <p className="border-b-4">OR</p> */}
<p className="flex justify-center">
  Already Have An Account?{" "}
  <a href="/login" className="text-[#Eac117]">
    Log in
  </a>
</p>
  </div>
  <div className="w-[50%]">
          <img src="src/images/af4c5300-315b-46c7-8786-b704810b21cf.jpeg" className="w-[100%] h-[100vh]"/>
          </div>
        </div>
        </>
    )
}
export default Register