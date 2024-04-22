function Herocard({image,heading,btn,content}){
    return(
        <>
        <div className="flex flex-col mt-5">
            <img className="w-[50%] border" src={image} alt="" />
            <h1>{heading}</h1>
            <p className="w-[50%] pt-6 pb-6">{content}</p>
            <button>{btn}</button>
        </div>
        </>
    )
}
export default Herocard