import CardSosmed from "../CardSosmed";
import CardContact from "../CardContact";

// icon
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";

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
    link: "https://t.me/nugrohodwiajiF",
    color: "",
  },
  {
    id: 3,
    icon: <FaFacebookF />,
    link: "https://t.me/nugrohodwiajiF",
    color: "text-blue-700",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "https://t.me/nugrohodwiajiF",
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
    link: "",
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
  return (
    <div className=" bg-white w-[17rem] h-[34rem] rounded-3xl flex flex-col items-center gap-3 ">
      <img
        src="/profil.jpeg"
        alt="upsss... ada kesalahan"
        className="w-[10rem] bg-red-400 -mt-[5rem] h-[10rem] rounded-3xl"
      />
      <h1 className="text-2xl font-tinne font-semibold">Nugroho Dwi Aji</h1>
      <h2 className="px-3 py-2 bg-gray-200 rounded-xl">Mahasiswa</h2>
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
    </div>
  );
};

export default ProfilLayout;
