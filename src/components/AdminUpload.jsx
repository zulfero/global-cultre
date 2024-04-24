import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebaseStorage";
import { useState } from "react";
import loader from "../images/loader.gif";
function AdminUpload() {
  const [usedata, setUsedata] = useState({
    name: "",
    bio: "",
  });
  const [errormessege, seterrorMessege] = useState("");
  const [loading, setLoading] = useState(true);
  function handleChange(e) {
    setUsedata({ ...usedata, [e.target.name]: e.target.value });
  }
  function handleCoverImageUpload(e) {
    const file = e.target.files[0];
    const storageRef = ref(storage, `/cultures/${file.name}`);

    const reader = new FileReader();

    reader.onload = () => {
      console.log(reader.result);

      const base64String = reader.result;
      uploadString(storageRef, base64String, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");

        setUsedata({
          ...usedata,
          coverImg: `https://firebasestorage.googleapis.com/v0/b/culture-clan.appspot.com/o/cultures%2F${file.name}?alt=media`,
        });
      });
    };
    reader.readAsDataURL(file);
    console.log(file);
    if (file.name === "") {
      seterrorMessege("Plese fill out all the field");
    } else if (file.bio === "") {
      seterrorMessege("Plese fill out all the fields");
    } else {
      seterrorMessege("");
    }
  }

  const handleCultureSubmit = () => {
    console.log(usedata);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl">Upload Culture</h1>
      </div>
      <div className="flex justify-center flex-col border bg-stone-200 pt-9 pb-9">
        <div className="flex items-center justify-center flex-col gap-12">
          <input
            onChange={(e) => handleChange(e)}
            className="border p-7 shadow-xl outline-none "
            type="text"
            placeholder="Upload Tribe Name"
            name="name"
          />
          <div className="m-9 flex-col gap-4  shadow-xl flex border p-[4em] outline-none">
            <label className="text-[1.4em]">Upload Cover image</label>
            <label
              htmlFor="cover"
              className="bg-stone-600 text-white py-4 px-8 rounded-md text-center cursor-pointer"
            >
              Select Image
            </label>
            <input
              className="outline-none hidden"
              type="file"
              placeholder="upload a cover image"
              id="cover"
              onChange={(e) => handleCoverImageUpload(e)}
            />
          </div>
          {usedata.coverImg && <img src={usedata.coverImg} alt="" />}

          <textarea
            onChange={(e) => handleChange(e)}
            className="border shadow-xl outline-none"
            name="bio"
            id=""
            cols="50"
            rows="7"
            placeholder="Brief Bio"
          ></textarea>
        </div>
        <div className="flex justify-center flex-col gap-9 items-center">
          <div className="flex flex-col gap-5">
            <div className="mt-7">
              <button
                onClick={(e) => handleCultureSubmit(e)}
                className="border rounded-full p-[1.4em] text-white px-[5em] text-[1.3em] bg-stone-700"
              >
                Submit
              </button>
              <p className="text-[red] pl-12 pt-5 font-bold">{errormessege}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminUpload;
