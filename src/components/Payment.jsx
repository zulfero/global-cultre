import { auth, db } from "../firebaseStorage";
import { collection, addDoc } from "firebase/firestore";
import React from "react";

function PaymentSection() {
  const handlePayment = () => {
    const paymentData = {
      amount: 100,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    firestore
      .collection("payments")
      .add(paymentData)
      .then(() => {
        console.log("Payment information stored successfully.");
      })
      .catch((error) => {
        console.error("Error storing payment information:", error);
      });
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    paypal
      .HostedButtons({
        hostedButtonId: "PW64CJ9BL7HRE",
      })
      .render("#paypal-container-PW64CJ9BL7HRE");
  });

  return (
    <>
      <h2 className="text-center text-2xl">Payment Form</h2>
      <div className="flex justify-center  shadow-lg  py-8">
        <div>
          <div id="paypal-container-PW64CJ9BL7HRE"></div>
          <div style={buttonContainerStyle}></div>
        </div>
      </div>
    </>
  );
}

export default PaymentSection;
