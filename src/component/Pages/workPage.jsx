import CardGalery from "../CardGalery";
import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";

const galery = [
  {
    id: 1,
    img: "/siu.png",
    desc: "Sistem informasi UKM adalah Project masive di infinite Learning. Sistem ini bertujuan untuk mempermudah akses informasi dan registrasi bagi calon anggota UKM",
  },
  {
    id: 2,
    img: "/webPorto.png",
    desc: "Website Portofolio adalah Tugas Tech dari Infinite Learning. Web ini bertujuan Untuk memberi informasi tentang data diri.",
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
              Project <hr className="h-1 w-1/2" />
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
