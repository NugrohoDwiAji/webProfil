import { NavLink } from "react-router-dom";
import ProfilLayout from "../Layouts/ProfilLayout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
    navigate('/about')
    }, 2000); // Ubah delay sesuai kebutuhan (dalam milidetik)

    return () => clearTimeout(delay);
  }, [navigate]);
  return (
    <div className="h-screen w-screen gap-10 flex flex-col justify-center items-center text-5xl font-bold text-secondary500">
       <h1 className="animate-bounce">Wellcome To My Web Profil...!</h1>
    </div>
  );
};
export default LandingPage;
