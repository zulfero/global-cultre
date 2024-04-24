import { useState } from "react";

function SiteProp({ heading, img, image, paragraph, category, setCategory }) {
  return (
    <div>
      <div className="flex gap-5 mb-6"></div>
      <div className="  border rounded-lg bg-stone-600 flex-col mb-[5em] ">
        <img className="" src={image} alt="" />
        <p className="text-white  ">{paragraph}</p>
      </div>
    </div>
  );
}
export default SiteProp;
