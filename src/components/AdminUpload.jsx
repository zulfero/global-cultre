function AdminUpload() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl">Upload Culture</h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-12">
          <input className="border p-7 shadow-xl outline-none " type="text" placeholder="Upload Tribe Name" />
          <div className="m-9 shadow-xl">
            <input className="border p-[5em] outline-none" type="text" placeholder="upload a cover image" />
          </div>
          <textarea
            className="border shadow-xl outline-none"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Brief Bio"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-9 items-center">
        <h1 className="text-2xl mt-6">Categories</h1>
        <div className="flex flex-col gap-5">
          <div className="mt-7">
            <button className="border rounded-full p-[1.4em] text-white px-[5em] text-[1.3em] bg-stone-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminUpload;
