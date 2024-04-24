import SiteProp from "./SiteProp";
import { useState } from "react";

function Site() {
  const handleChangeCategory = (e, category) => {
    setCategory(category.toLowerCase());
  };
  const [category, setCategory] = useState("food");

  function renderCultures() {
    console.log(category);
    if (category === "food") {
      return (
        <div>
          <SiteProp
            image="src/images/gikuyu/luofood.jpeg"
            paragraph="   This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily."
            category={category}
            setCategory={setCategory}
          />
        </div>
      );
    } else if (category === "fashion") {
      return (
        <div>
          <SiteProp
            image="src/images/gikuyu/mencloth.jpeg"
            paragraph="         This is mostly our starch; the brown one features millet and cassava
    flour. However, you can also have the white one that features maize
    flour. For Luos, this is a staple to date that you will have
    traditionally and today almost daily."
            category={category}
            setCategory={setCategory}
          />
        </div>
      );
    } else if (category === "music") {
      return (
        <div>
          <SiteProp
            image="src/images/gikuyu/luofood.jpeg"
            paragraph=" This is mostly our starch; the brown one features millet and cassava
            flour. However, you can also have the white one that features maize
            flour. For Luos, this is a staple to date that you will have
            traditionally and today almost daily."
            category={category}
            setCategory={setCategory}
          />
        </div>
      );
    } else if (category === "traditions") {
      return (
        <div>
          <SiteProp
            image="src/images/gikuyu/traditions.jpeg"
            paragraph="Traditionally, the Luo were organized into exogamous clans
          consisting of several families headed by a clan elder. This
          tradition is followed to this day.
        "
            category={category}
            setCategory={setCategory}
          />
        </div>
      );
    }
  }

  return (
    <div className="mt-[1em]">
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
          <div className="flex justify-center items-center mt-6">
            <button className="text-white border rounded-full p-7 px-[5em] text-[1.3em]  bg-stone-700 shadow-white">
              Interested
            </button>
          </div>
        </div>
      </div>
      <div className="  cursor-pointer container mx-auto mt-7 flex justify-between">
        <div onClick={(e) => handleChangeCategory(e, "food")}>
          <div>
            <img src="src/images/gikuyu/iconf.png" alt="" width={50} />
            <h3>Food</h3>
          </div>
        </div>
        <div onClick={(e) => handleChangeCategory(e, "fashion")}>
          <div>
            <img src="src/images/gikuyu/attire.png" alt="" width={50} />
            <h3>Fashion</h3>
          </div>
        </div>
        <div onClick={(e) => handleChangeCategory(e, "music")}>
          <div>
            <img src="src/images/gikuyu/music.png" alt="" width={50} />
            <h3>Music</h3>
          </div>
        </div>
        <div onClick={(e) => handleChangeCategory(e, "traditions")}>
          <div className="">
            <img
              src="src/images/gikuyu/native-american.png"
              alt=""
              width={50}
            />
            <h3>Traditions</h3>
          </div>
        </div>
      </div>
      <div className=" container mx-auto gap-6 flex text-[1.4em] mt-5 ">
        {renderCultures()}
      </div>
    </div>
  );
}
export default Site;
