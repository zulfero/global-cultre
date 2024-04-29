import Herocard from "./Herocard";
import { Link } from "react-router-dom";

function Herocards() {
  return (
    <>
      <div className="container mx-auto flex justify-center gap-8 flex-wrap">
        <Herocard
          heading="The Kamba"
          bgImage="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(src/images/gikuyu/new.jpeg)]  "
        />
        <Herocard
          heading="The Gikuyu"
          bgImage="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(src/images/gikuyu/g.jpeg)]  "
        />
        <Herocard
          heading="The Luo"
          bgImage="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(src/images/gikuyu/kalenji/luo/tribe.jpeg)]  "
        />
        <Herocard
          heading="The Kamba"
          bgImage="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(src/images/gikuyu/new.jpeg)]  "
        />
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className=" text-2xl font-bold">The App</h1>
        <p className="flex w-[50%] text-2xl">
          {" "}
          The App That gives you a clear vision of different cultures of various
          communities at the comfort of your home or to those curious for more
          knowledge can see these cultures first hand by booking a trip to these
          communities.
        </p>
      </div>
      <div className=" container mx-auto mt-36 justify-center items-center flex gap-[8em] flex-wrap">
        <div>
          <img
            className="border rounded-xl"
            src="src/images/gikuyu/culture.jpeg"
            alt=""
          />
          <h1 className="font-bold">Discover Different People</h1>
        </div>
        <div>
          <img
            className="border rounded-xl"
            src="src/images/gikuyu/luo.jpeg"
            alt=""
          />
          <h1 className="font-bold">Learn Their Traditions</h1>
        </div>
        <div>
          <img
            className="border rounded-xl"
            src="src/images/food.jpeg"
            alt=""
          />
          <h1 className="font-bold">Taste Their Delicacies</h1>
        </div>
      </div>
    </>
  );
}
export default Herocards;
