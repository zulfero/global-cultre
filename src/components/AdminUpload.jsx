import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebaseStorage";
import { useState } from "react";
import loader from "../images/loader.gif";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseStorage";
function AdminUpload() {
  const [usedata, setUsedata] = useState({
    name: "",
    bio: "",
  });
  const [submitmesseg, setSubmitMessege] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setUsedata({ ...usedata, [e.target.name]: e.target.value });
  }
  function handleCoverImageUpload(e) {
    setLoading(true);
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

        setLoading(false);
      });
    };
    reader.readAsDataURL(file);
    console.log(file);
  }

  const handleCultureSubmit = async () => {
    const inputErrors = {};

    if (!usedata.name || usedata.name === "") {
      inputErrors.name = "Please enter the culture name";
    }
    if (!usedata.coverImg || usedata.coverImg === "") {
      inputErrors.coverImg = "Please select an image cover";
    }
    if (!usedata.bio || usedata.bio === "") {
      inputErrors.bio = "Please fill out this field";
    }

    if (usedata.name && usedata.coverImg && usedata.bio) {
      setErrors({});
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "cultures"), usedata);
      console.log("Document written with ID: ", docRef.id);
      if(docRef){
        setUsedata({
          name:"",
          bio:"",
          coverImg:""
        })
      }
    }

    setErrors(inputErrors);
    console.log(inputErrors);
  };

  const handleSubmitMessege = () => {
    const submitedMessege = {};
    if (usedata.bio) {
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl">Upload Culture</h1>
      </div>
      <div className="flex justify-center flex-col border bg-stone-200 pt-9 pb-9">
        <div className="flex items-center justify-center flex-col gap-12">
          {errors.name ? (
            <p className="text-red-500 font-bold">{errors.name}</p>
          ) : (
            <p></p>
          )}
          <input
            onChange={(e) => handleChange(e)}
            className="border p-7 px-[8em] shadow-xl outline-none "
            type="text"
            placeholder="Upload Tribe Name"
            name="name"
            value={usedata.name}          />

          <div className="m-9 flex-col gap-4  shadow-xl flex border p-[4em] px-[10em] outline-none">
            <label className="text-[1.4em]">Upload Cover image</label>
            <label
              htmlFor="cover"
              className="bg-stone-600 text-white py-4 px-8 rounded-md text-center cursor-pointer"
            >
              Select Image
            </label>
            {errors.coverImg ? (
              <p className="text-red-500 font-bold">{errors.coverImg}</p>
            ) : (
              <p></p>
            )}
            <input
              name="image"
              className="outline-none hidden"
              type="file"
              placeholder="upload a cover image"
              id="cover"
              onChange={(e) => handleCoverImageUpload(e)}
            />
          </div>
          {loading && <img src={loader} />}
          {usedata.coverImg && <img src={usedata.coverImg} alt="" />}

          {errors.bio ? (
            <p className="text-red-500 font-bold">{errors.bio}</p>
          ) : (
            <p></p>
          )}
          <textarea
            onChange={(e) => handleChange(e)}
            className="border shadow-xl outline-none resize-none"
            name="bio"
            id=""
            cols="50"
            rows="7"
            placeholder="Brief Bio"
            value={usedata.bio}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminUpload;
