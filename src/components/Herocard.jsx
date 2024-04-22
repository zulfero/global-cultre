function Herocard({ image, heading, btn, content }) {
  return (
    <>
      <div className="flex mt-5 gap-3 ">
        <div className="content-cover h-[200px] bg-black border border-5 border-red-600 flex-1">
          <img className="w-full h-full object-cover border" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h1>{heading}</h1>
          <p className="pt-6 pb-6">{content}</p>
        </div>
      </div>
    </>
  );
}
export default Herocard;
