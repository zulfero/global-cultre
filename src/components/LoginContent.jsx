function LoginContent(){
    return(
        <>
        <div className="w-[100%] flex gap-[2em]">
          <div className="w-[50%]">
            <img src="src/images/882c89a1-a719-4df6-bbba-4dbf53b0fd97.jpeg"className="w-[100%] h-[100vh]" />
          </div>
          <div className="w-[40%] flex flex-col gap-[4em] my-[2em]">
            <h1 className="flex justify-center text-[3em] font-bold text-[#EAC117]">
              Login to your Account
            </h1>
            <input
              type="text"
              placeholder="Email Address"
              className="border-2  px-[5em] py-8  shadow-xl"
            />
            <div className="flex border-2  px-[5em] py-8 shadow-xl ">
              <input type="text"placeholder="Password" className="" />
             
            </div>
            <div className="item-center">
              
              {/* <p className=" text-[20px]">Forgot Password?</p> */}
            </div>
            <div className="flex justify-center">
            <button className="border-none rounded-[2em] px-[5em] py-5 font-bold bg-stone-700 text-white">
              Sign In
            </button>
            </div>
            <div className="flex justify-center text-[20px]">
              Dont Have An Account Yet?
              <a href="/signup" className="text-[#EAC117]">
                Register 
              </a>
            </div>
          </div>
          
        </div>
      </>
    )
}
export default LoginContent