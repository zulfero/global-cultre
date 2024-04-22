function Herocard({image,heading,btn}){
    return(
        <>
        <div>
            <img src={image} alt="" />
            <h1>{heading}</h1>
            <button>{btn}</button>
        </div>
        </>
    )
}
export default Herocard