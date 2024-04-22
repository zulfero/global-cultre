function Herocard() {
  return (
    <div className=" container mx-auto mt-[7em]  flex gap-[5em]">
      <div className="border border-gray-500 w-[20%] flex shadow-2xl flex-col items-center justify-center pt-4">
        <img src="src/images/gikuyu/paint.jpeg" alt="" />
        <h1 className="text-2xl pt-3">Art</h1>
        <p className="text-[1em] text-stone-600">
          Explore Art from different cultures round the country and fall in love
          with their paintings.
        </p>
        <button className="border p-4 px-6 bg-stone-400 rounded-full">Learn More</button>
      </div>
      <div className="border border-gray-500 w-[20%] flex shadow-2xl flex-col items-center justify-center pt-4 ">
        <img src="src/images/tourist.jpeg" alt="" />
        <h1 className="text-2xl pt-3">Travel</h1>
        <p className="text-[1em] text-stone-600">
          Explore different people around the country and fall in love with
          their traditions.
        </p>
        <button className="border p-4 px-6 bg-stone-400 rounded-full mb-[11em]">Learn More</button>
      </div>
      <div className="border border-gray-500 w-[20%] flex shadow-2xl flex-col items-center justify-center pt-4">
        <img src="src/images/food.jpeg" alt="" />
        <h1 className="text-2xl pt-3">Eat</h1>
        <p className="text-[1em] text-stone-600">
          For your taste buds we bring happiness and new flavour to light up
          your day.From far and wide, the cuisines keep on comming.
        </p>
        <button className="border p-4 px-6 bg-stone-400 rounded-full mt-[4em]">Learn More</button>
      </div>
      <div className="border border-gray-500 w-[20%] flex shadow-2xl flex-col items-center justify-center pt-4">
        <img src="src/images/gikuyu/togather.jpg" alt="" />
        <h1 className="text-2xl pt-3">Traditions</h1>
        <p className="text-[1em] text-stone-600">
          be part of their celebrations experience new sensations and enjoy
          their togathereness as one of them
        </p>
<button className="border mt-[6em] p-4 px-6 bg-stone-400 rounded-full">Learn More</button>
      </div>
    </div>
  );
}
export default Herocard;
