import { useEffect, useState } from "react";
import { FormAlert } from "./FormAlert";
import { Phone, Xmark } from "iconoir-react";
import overlaybg from "../../assets/contactFormGodrejGreen.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const ContactForm = ({ contactmodal, setContactModal, setSiteVisitModal }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateForm = () => {
    if (!name || !number) {
      setAlert(<FormAlert message="Please fill in all required fields." onClose={() => setAlert(null)} />);
      return false;
    }

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      setAlert(<FormAlert message="Invalid Name. Use only alphabets and spaces." onClose={() => setAlert(null)} />);
      return false;
    }

    if (!isValidPhoneNumber(number)) {
      setAlert(<FormAlert message="Invalid Phone Number." onClose={() => setAlert(null)} />);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      console.log("Submitting...");
      return;
    }
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setAlert(<FormAlert message="Submitting form..." onClose={() => setAlert(null)} />);

    console.log("Form Data:", {
      name: name.trim(),
      phoneNumber: number.trim(),
    });

    setTimeout(() => {
      setLoading(false);
      setName("");
      setNumber("");
      setAlert(<FormAlert message="We received your info. Expect a response soon!" onClose={() => setAlert(null)} />);
    }, 1000);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-80 z-30"></div>
      <div className={`fixed ${isMobile ? "" : "top-24"} left-0 right-0 bg-white z-40 w-full md:w-fit mx-auto`}>
        <div className="max-w-7xl mx-auto flex gap-5 items-center justify-between border shadow-xl overflow-hidden" style={{ height: "75vh" }}>
          <img src={overlaybg} alt="background" className="hidden md:block w-full h-full" />
          <div className="mx-auto w-full gap-3 px-8 h-full flex flex-col items-center justify-center">
            <button className="text-3xl focus:outline-none float-end absolute top-2 right-2 bg-white w-fit" onClick={() => setContactModal(!contactmodal)}>
              <Xmark />
            </button>
            <div className={`font-subheading font-semibold text-[28px] leading-[25px] text-center ${isMobile ? "pt-4" : "pt-36"} md:pt-8`}>
              Want to know more? Enquire Now!
            </div>
            <div className="mx-auto max-w-sm pt-8 w-full">
              <input type="text" className="p-4 w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mx-auto max-w-sm py-4 w-full">
              <PhoneInput className="bg-transparent text-base focus:outline-none placeholder-gray-400 border border-gray-500 rounded-sm h-16 p-5" placeholder="Contact Number" defaultCountry="IN" value={number} onChange={setNumber} />
            </div>
            <div className="flex flex-col items-center justify-between w-full">
              <div className="mx-auto max-w-sm w-full">
                <button onClick={handleSubmit} className={`text-white my-5 p-2 w-full ${loading ? "bg-gray-400" : "bg-PrestigeBrown"}`} disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              <div className="flex w-full items-center justify-center gap-[10px]">
                <div className="h-[2px] w-[86px] bg-[#D9D9D9]" />
                <span className="font-sans font-normal text-[18px] leading-[24px] text-[#7E7E7E]">Or</span>
                <div className="h-[2px] w-[86px] bg-[#D9D9D9]" />
              </div>
              <div className="mx-auto max-w-sm w-full">
                <button className="text-white my-5 p-2 w-full bg-PrestigeBrown flex items-center justify-center hover:bg-opacity-90 transition">
                  <a href="tel:+919036958110" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" /> 9036958110
                  </a>
                </button>
              </div>
            </div>
            <div className="text-center text-gray-500">
              Click <span className="text-black font-semibold cursor-pointer" onClick={() => { setContactModal(false); setSiteVisitModal(true); }}>here</span> to Schedule a Site Visit
            </div>
          </div>
        </div>
        {alert && <div>{alert}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
