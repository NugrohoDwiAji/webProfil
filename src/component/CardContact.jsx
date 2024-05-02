import { RiWhatsappFill } from "react-icons/ri";

const CardContact = (props) => {
  const { iconColor, icon, title, desc, link, id} = props;

  return (
    <a
      href={link}
      className={`h-[3rem] w-52 border-b-2 border-gray-300 flex gap-2 hover:scale-90 hover:border-none ease-in-out duration-300 hover:rounded-2xl hover:shadow-xl ${id==4? "border-none" :" "}`}
    >
      <div className={`[&>svg]:h-8 [&>svg]:w-8 ${iconColor}`}>{icon}</div>
      <div>
        <h1 className="text-xs">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </a>
  );
};

export default CardContact;
