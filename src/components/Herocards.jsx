import Herocard from "./Herocard";

function Herocards() {
  return (
    <div className="container mx-auto flex justify-center gap-8">
      <div>
        <Herocard
          image="src/images/gikuyu/kamba.jpg"
          heading="The Kamba"
          content="They are also called the Akamba, Mukamba, Akamba or Keramba. The Maasai call the Akamba - Lungnu and the coastal people call the Akamba – Waumanguo due to their light dress. "
        />
      </div>
      <div>
        <Herocard
          image="src/images/gikuyu/kalenji/people.jpg"
          heading="The Gikuyu"
          content="The Kikuyu belong to the Northeastern Bantu branch. Their language is most closely related to that of the Embu and Mbeere. Geographically, they are concentrated in the vicinity of Mount Kenya."
        />
      </div>
      <div>
        <Herocard
          image="src/images/gikuyu/luo.jpeg"
          heading="The Luo"
          content="raditionally, the Luo were organized into exogamous clans consisting of several families headed by a clan elder. This tradition is followed to this day. As soon as we meet another Luo person, the first ."
        />
      </div>
    </div>
  );
}
export default Herocards;
