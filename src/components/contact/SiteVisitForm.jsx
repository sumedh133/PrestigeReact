import React, { useState, useEffect } from "react";
import { FormAlert } from "./FormAlert";
import { Calendar, Xmark } from "iconoir-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import overlaybg from "../../assets/overlay-bg-site.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export const SiteVisitForm = ({ sitevisitmodal, setSiteVisitModal }) => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [startDate, setStartDate] = useState(new Date());
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showAlert = (message) => {
    setAlertMessage(<FormAlert message={message} onClose={() => setAlertMessage(null)} />);
  };

  const validateForm = () => {
    const { name, number } = formData;
    if (!name || !number) {
      showAlert("Please fill in all required fields.");
      return false;
    }

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      showAlert("Invalid Full Name. Please use only alphabets and spaces.");
      return false;
    }

    if (number.length < 10 || number.length > 15) {
      showAlert("Invalid Phone Number.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    showAlert("Submitting form...");

    console.log("Form Data:", {
      name: formData.name.trim(),
      phoneNumber: formData.number.trim(),
      siteVisitDate: Math.floor(startDate.getTime() / 1000),
    });

    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", number: "" });
      showAlert("We received your info. Expect a response soon!");
    }, 1000);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-80 z-30"></div>
      <div className={`fixed ${isMobile ? "" : "top-24"} left-0 right-0 bg-white z-30 w-full md:w-fit mx-auto`}>
        <div className="max-w-7xl mx-auto md:grid grid-cols-2 gap-5 items-center border shadow-xl" style={{ height: "75vh" }}>
          <img src={overlaybg} alt="background" className="hidden md:block w-full h-full overflow-hidden" />
          <form className="mx-auto w-full gap-5 px-8" onSubmit={handleSubmit}>
            <button className="text-3xl absolute top-10 right-5 rounded-full bg-white" onClick={() => setSiteVisitModal(!sitevisitmodal)}>
              <Xmark />
            </button>
            <div className="font-subheading font-medium text-3xl text-center pt-8">Schedule Your Site Visit</div>
            <div className="text-xl text-center font-body py-4 opacity-50">We’ll need some info. to schedule it for you!</div>
            <div className="mx-auto max-w-sm pt-8">
              <input type="text" className="p-4 w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
            </div>
            <div className="mx-auto max-w-sm py-4">
              <PhoneInput placeholder="Contact Number" defaultCountry="IN" value={formData.number} onChange={(value) => setFormData((prev) => ({ ...prev, number: value }))} className="bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm h-16 shadow-none p-5" />
            </div>
            <div className="mx-auto max-w-sm py-4">
              <div className="p-3 w-full placeholder-gray-400 text-black border border-gray-500 rounded-sm">
                <DatePicker showTimeSelect showIcon selected={startDate} onChange={(date) => setStartDate(date)} className="bg-transparent ml-3 text-base focus:outline-none" />
              </div>
            </div>
            <div className="flex">
              <div className="max-w-sm mx-auto w-40">
                <button type="submit" className={`text-white my-5 p-2 w-full rounded-md ${loading ? "bg-gray-400" : "bg-PrestigeBrown"}`} disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
        {alertMessage && <div>{alertMessage}</div>}
      </div>
    </div>
  );
};

export default SiteVisitForm;
