import { useState } from "react";

function QuestionareContent({ showbookingform, setShowBookingForm }) {
  const [bookingFormData, setBookingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    duration: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    setBookingFormData({ ...bookingFormData, [e.target.name]: e.target.value });
  }

  function submitBookingForm() {
    if (
      bookingFormData.firstName === "" ||
      bookingFormData.lastName === "" ||
      bookingFormData.email === "" ||
      bookingFormData.phone === "" ||
      bookingFormData.adults === "" ||
      bookingFormData.children === "" ||
      bookingFormData.duration === "" ||
      bookingFormData.message == ""
    ) {
      setErrorMessage("Kindly fill all the details");
    } else {
      setErrorMessage("");
      console.log(bookingFormData);
      setShowBookingForm(true);
    }
  }
  return (
    <div className="container mx-auto bg-stone-200   flex flex-col gap-8 py-5 absolute top-[15%] overflow-hidden">
      {/* <div className="flex justify-center flex-col items-center gap-5 font-bold text-2xl"> */}
      <div className="flex justify-center ml-[44.5em] ">
        <button
          className="border rounded-full  p-2
        bg-slate-400"
        >
          cancel
        </button>
      </div>
      <h1 className="font-bold text-2xl text-center">Tourists' Booking Form</h1>
      {/* <p>Please Fill out All the fields For the Chosen Tour Company</p> */}
      {/* </div> */}
      <form className="flex flex-col w-[80%] mx-auto gap-4">
        <div className="flex justify-between flex-wrap gap-4 w-full">
          <input
            className=" shadow-2xl border-none outline-none p-4"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
          />
          <input
            className="border-none  shadow-2xl   outline-none p-4"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <input
          className="border-none  shadow-2xl   outline-none p-4"
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          className="border-none  shadow-2xl   outline-none p-4"
          type="number"
          placeholder="Phone Number"
          name="phone"
          onChange={handleInputChange}
        />
        <input
          className="border-none  shadow-2xl outline-none p-4"
          type="number"
          placeholder="No. of Adults"
          name="adults"
          onChange={handleInputChange}
        />
        <input
          className="border-none  shadow-2xl   outline-none p-4"
          type="number"
          placeholder="No. of children"
          name="children"
          onChange={handleInputChange}
        />
        <input
          className="border-none  shadow-2xl   outline-none p-4"
          type="number"
          placeholder="Duration of stay"
          name="duration"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Anyting additional(Optional)"
          rows="5"
          className="border-none  shadow-2xl   outline-none p-4"
          name="message"
          onChange={handleInputChange}
        ></textarea>
      </form>
      <p className="text-red-500 text-center font-bold">{errorMessage}</p>
      <div className="flex justify-center">
        <button
          onClick={submitBookingForm}
          className="border-none rounded-full p-[1.4em] text-white px-[5em] text-[1.3em] bg-stone-700"
        >
          Submit
        </button>
      </div>
    </div>
    // </div>
  );
}
export default QuestionareContent;
