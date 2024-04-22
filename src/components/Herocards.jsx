import Herocard from "./Herocard";

function Herocards() {
  return (
    <div className="container mx-auto flex justify-between">
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
  );
}
export default Herocards;
