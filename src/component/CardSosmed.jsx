const CardSosmed = (props) =>{
    const {children, link, color} = props;
    return (
        <a href={link} className={`h-10 hover:bg-primary500 hover:scale-110 hover:shadow-xl ease-in-out  duration-300 bg-gray-100 w-10 rounded-xl [&>svg]:w-5 [&>svg]:h-5 ${color} flex justify-center items-center hover:rounded-full bg-slate-200 `}>
      {children}
        </a>
    )
}

export default CardSosmed;