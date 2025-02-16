import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import SlidingCard from "../SlidingCard";

const ContactPage = () => {
  const [nama, setNama] = useState(false);
  const [email, setEmail] = useState(false);
  const [massage, setMassage] = useState(false);

  
  const [isPhone, setPhone] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setPhone(true);
      } else {
        setPhone(false);
      }
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" min-h-screen max-w-full flex md:items-end justify-center md:gap-[1.88rem] gradien transition-all">
       {isPhone?  <SlidingCard /> : <ProfilLayout /> }
      <div className="flex flex-col gap-[1.88rem] items-end">
        <Navbar />
        <div className="bg-white w-[23rem] lg:w-[40.4rem] lg:h-[27rem] rounded-t-3xl p-5 lg:p-10 overflow-y-auto scrollbar-hide">
          <div>
            <h1 className="flex items-end gap-5 font-semibold text-2xl lg:text-4xl font-tinne">
              Contact <hr className="h-1 w-1/2" />
            </h1>
            <div className="p-7 bg-gray-100 rounded-xl mt-7">
              <h1 className="text-lg lg:text-xl mb-7">I`m Always Open To Discussing</h1>
              <form action="" className="flex flex-col w-full ">
                <label
                  htmlFor="nama"
                  className={`${nama ? "text-secondary500" : ""}`}
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="outline-none border-b-2 border-primary500 bg-gray-100 focus:border-b-secondary500 h-3 focus:h-7 ease-in-out duration-300 mb-5"
                  onFocus={() => setNama(true)}
                  onBlur={() => setNama(false)}
                />
                <label
                  htmlFor="email"
                  className={`${email ? "text-secondary500" : ""}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none border-b-2 border-primary500 bg-gray-100 focus:border-b-secondary500 h-3 focus:h-7 ease-in-out duration-300 mb-5"
                  onFocus={() => setEmail(true)}
                  onBlur={() => setEmail(false)}
                />
                <label
                  htmlFor="massage"
                  className={`${massage ? "text-secondary500" : ""}`}
                >
                  Massage
                </label>
                <input
                  type="text"
                  name="massage"
                  id="massage"
                  className="outline-none border-b-2 border-primary500 bg-gray-100 focus:border-b-secondary500 h-3 focus:h-7 ease-in-out duration-300 mb-5"
                  onFocus={() => setMassage(true)}
                  onBlur={() => setMassage(false)}
                />
                <button type="submit" className="rounded-lg px-6 py-1 bg-secondary500 max-w-fit text-white hover:shadow-xl hover:scale-105">Submit</button>
              </form>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
