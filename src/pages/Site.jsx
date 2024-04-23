import { useState } from "react";

function Site() {
  const [currentcategory, setCategory] = useState([]);
  return (
    <div className="">
      <div className="h-[50vh] w-[100%] bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(src/images/gikuyu/luhya.jpg)] bg-no-repeat bg-cover">
        <h1 className="text-[4em] flex justify-center items-center text-white ">
          The luo
        </h1>
        <div className="container mx-auto">
          <p className="text-white text-2xl">
            It is estimated that the Luo, who call themselves Joluo (aka Jaluo,
            “people of Luo”) were led into Kenya by a chief called Ramogi Ajwang
            about 500 years ago. They immediately found Lake Victoria which they
            called Nam Lolwe meaning “endless lake”. When they arrived it really
            must have seemed like the water went on forever. The Joluo settled
            at the lake and became fishermen, which they are to this day. Since
            their arrival in Kenya over half a century ago they have become very
            influential and are the fourth largest ethnic group in Kenya today.
          </p>
        </div>
      </div>
      <div className=" container mx-auto justify-around flex text-[1.4em] mt-5">
        <div>
          <h1>Food</h1>
          <img src="src/images/gikuyu/luofood.jpeg" alt="" />
          <p className="w-[50%]">
            This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily.
          </p>
        </div>
        {/* <div>
          <h1>Fashion</h1>
          <img src="src/images/gikuyu/womancloth.jpg" width={200} alt="" />
          <p className="w-[50%]">
            This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily.
          </p>
        </div> */}
        {/* <div>
          <h1>Music</h1>
          <img src="src/images/gikuyu/luofood.jpeg" alt="" />
          <p className="w-[50%]">
            This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily.
          </p>
        </div> */}
        <div>
          <h1 className="text-bold">Traditions</h1>
          <img src="src/images/gikuyu/traditions.jpeg" width={260} alt="" />
          <p className="w-[50%]">
            This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily. 
          </p>
        </div>
      </div>
    </div>
  );
}
export default Site;
