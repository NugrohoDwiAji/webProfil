import CardMenu from "./CardMenu";

import { IoPersonOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";

const menus = [
  { id: "about", title: "About", icon: <IoPersonOutline size={32} /> },
  { id: "resume", title: "Resume", icon: <FaRegFileAlt size={32} /> },
  { id: "work", title: "Work", icon: <MdWorkOutline size={32} /> },
  { id: "contact", title: "Contact", icon: <MdOutlineContactPhone size={32} /> },
];

const Navbar = () => {
  return (
    <div className="bg-white w-full mt-10 md:mt-0  h-24 md:h-28 md:w-[27rem] md:rounded-3xl rounded-xl flex justify-evenly items-center">
      {menus.map((item, key) => (
        <CardMenu id={item.id} title={item.title} icon={item.icon} key={key}/>
      ))}
    </div>
  );
};

export default Navbar;
