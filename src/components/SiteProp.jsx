function SiteProp(heading, img, image, paragraph) {
  return (
    <div>
      <div className="flex gap-5 mb-6">
        <h1>{heading}</h1>
        <img className="size-8" src={img} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
export default SiteProp;
