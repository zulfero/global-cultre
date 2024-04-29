function Hero() {
  return (
    <div className="">
      <div className="h-[60vh] w-[100%] bg-[linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(src/images/banner.jpg)] bg-no-repeat bg-cover flex-wrap bg-center">
        <div className="container mx-auto flex flex-col justify-center items-center pt-40 ">
          <h1 className="text-4xl font-bold text-white">Culture Clan</h1>
          <p className=" text-4xl text-white pt-6 ">
            One Way Ticket To Knowledge
          </p>
        </div>
        <img src="" alt="" />
      </div>
      <div className="flex justify-center mt-[3em]  ">
        <input
          className="border border-gray-300 py-[1em] px-[5em] shadow-inner text-[1.1em] outline-none"
          type="text"
          placeholder="search a culture"
        />
      </div>
      <div></div>
    </div>
  );
}
export default Hero;
