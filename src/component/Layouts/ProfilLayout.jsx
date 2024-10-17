import CardSosmed from "../CardSosmed";
import CardContact from "../CardContact";
import axios from "axios";
import { useState } from "react";

// icon
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

const sosmed = [
  {
    id: 1,
    icon: <FaTelegramPlane />,
    link: "https://t.me/nugrohodwiaji",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: <FaInstagram color="red" />,
    link: "https://www.instagram.com/nugrohodwiaji_/",
    color: "",
  },
  {
    id: 3,
    icon: <FaFacebookF />,
    link: "",
    color: "text-blue-700",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nugroho-dwi-aji-aa61a72a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpvnXcTQ0RYuqtRCEDu1A%2Fg%3D%3D",
    color: "text-blue-700",
  },
];



const contacts = [
  {
    id: 1,
    icon: <RiWhatsappFill />,
    title: "WhatsApp",
    desc: "+6281803160359",
    iconColor: "text-green-600",
    link: "https://wa.me/+6281803160359",
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: "Email",
    desc: "nugrohodwiaji@gmail.com",
    iconColor: "text-amber-600",
    link: "mailto:nugrohodwiaji@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapLocationDot />,
    title: "Location",
    desc: "Lombok Utara, NTB",
    iconColor: "text-primary500",
    link: "",
  },
  {
    id: 4,
    icon: <BsFillCalendarDateFill />,
    title: "Birthday",
    desc: "1-11-2002",
    iconColor: "text-green-800",
    link: "",
  },
];

const ProfilLayout = () => {

  const [data, setdata] = useState({})


  const getLocation = () =>{
    try {
      axios.get("https://get.geojs.io/v1/ip/geo.json").then(response => {

        setdata(response.data)
        console.log(data)
      })
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className=" bg-white w-[17rem] h-[36rem] rounded-3xl flex flex-col items-center gap-3 ">
      <img
        src="/profil.jpeg"
        alt="upsss... ada kesalahan"
        className="w-[10rem] bg-red-400 -mt-[5rem] h-[10rem] rounded-3xl"
      />
      <h1 className="text-2xl font-tinne font-semibold">Nugroho Dwi Aji</h1>
      <h2 className="px-3 py-2 bg-gray-200 rounded-xl">Mahasiswa | Web Developer</h2>
      <div className="flex justify-evenly gap-2">
        {sosmed.map((item) => (
          <CardSosmed link={item.link} key={item.id} color={item.color}>
            {item.icon}
          </CardSosmed>
        ))}
      </div>
      <div className="w-[15rem] h-56 bg-slate-100 rounded-xl flex flex-col justify-evenly items-center">
        {contacts.map((item) => (
          <CardContact
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            key={item.id}
            iconColor={item.iconColor}
            link={item.link}
            id={item.id}
          />
        ))}
      </div>
      <button className="h-fit w-fit py-3 px-7 rounded-lg bg-primary500 hover:scale-105 text-white flex gap-4 items-center justify-center" onClick={getLocation()}>
      <BsDownload />Download CV
      </button>
    </div>
  );
};

export default ProfilLayout;
