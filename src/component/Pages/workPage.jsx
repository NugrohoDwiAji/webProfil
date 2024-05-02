import CardGalery from "../CardGalery";
import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";

const galery = [
  {
    id: 1,
    img: "/airku.jpg",
    desc: "Website airku adalah website yang dibuat menggunakaan react typescript dan nextjs.",
  },
  {
    id: 2,
    img: "/profilWeb.png",
    desc: "Website profil pribadi adalah website yang dibuat menggunakaan html murni dan boostrap. Web ini adalah web pertama saya",
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen max-w-full flex items-end justify-center gap-[1.88rem] gradien ">
      <ProfilLayout />
      <div className="flex flex-col gap-[1.88rem] items-end">
        <Navbar />
        <div className="bg-white w-[40.4rem] h-[27rem] rounded-t-3xl p-10 overflow-y-auto scrollbar-hide ">
          <div>
            <h1 className="flex items-end gap-5 font-semibold text-4xl font-tinne">
              Portofolio <hr className="h-1 w-1/2" />
            </h1>
           <div className="flex flex-wrap gap-10 mt-10">
            {galery.map((item)=>(
              <CardGalery img={item.img} desc={item.desc} key={item.id}/>
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
