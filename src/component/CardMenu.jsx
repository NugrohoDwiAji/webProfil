
// icon

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


const CardMenu = (props) =>{

    const lihatPath = useLocation();
    const path = lihatPath.pathname

    const {id, icon, title} = props;
    return(
        <NavLink to={"/"+id} className={`flex flex-col items-center  ease-in-out duration-300 hover:bg-primary500 hover:text-white hover:scale-110 hover:shadow-xl justify-center h-20 w-20  ${path=="/"+id? 'bg-primary500 text-white' :'bg-gray-200 text-gray-600'} rounded-3xl `}>
            {icon}
            <h1>{title}</h1>
        </NavLink>
    )
}

export default CardMenu;