import CardGalery from "../CardGalery";
import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";
import SlidingCard from "../SlidingCard";
import { useState, useEffect } from "react";

const galery = [
  {
    id: 1,
    img: "/siu.png",
    desc: "Sistem informasi UKM adalah Project masive di infinite Learning. Sistem ini bertujuan untuk mempermudah akses informasi dan registrasi bagi calon anggota UKM",
  },
  {
    id: 2,
    img: "/webPorto.png",
    desc: "Website Portofolio adalah web pribadi. Web ini bertujuan Untuk memberi informasi tentang data diri.",
  },
];

const WorkPage = () => {
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
      {isPhone ? <SlidingCard /> : <ProfilLayout />}
      <div className="flex flex-col gap-[1.88rem] items-end">
        <Navbar />
        <div className="bg-white w-[23rem] lg:w-[40.4rem] lg:h-[27rem] rounded-t-3xl p-5 lg:p-10 overflow-y-auto scrollbar-hide">
          <div>
            <h1 className="flex items-end gap-5 font-semibold text-2xl lg:text-4xl font-tinne">
              Project <hr className="h-1 w-1/2" />
            </h1>
            <div className="flex flex-wrap gap-10 mt-10">
              {galery.map((item) => (
                <CardGalery img={item.img} desc={item.desc} key={item.id} />
              ))}
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
