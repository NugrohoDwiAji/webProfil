import CardKemampuan from "../CardKemampuan";
import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";

import { SiEducative } from "react-icons/si";
import { TbNetwork } from "react-icons/tb";

const AboutPage = () => {
  return (
    <div className="min-h-screen max-w-full flex items-end justify-center gap-[1.88rem] gradien transition-all ">
      <ProfilLayout />
      <div className="flex flex-col gap-[1.88rem] items-end">
        <Navbar />
        <div className="bg-white w-[40.4rem] h-[27rem] rounded-t-3xl p-10 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="flex items-end gap-5 font-semibold text-4xl font-tinne">
              About <hr className="h-1 w-1/2" />
            </h1>
            <p className="text-justify">
              {" "}
              Mahasiswa program studi S1 Teknologi Informasi
              Universitas Bumigora dengan pengalaman organisasi pada bidang
              teknologi dan jaringan. Selain aktif dalam kegiatan organisasi,
              memiliki pengalaman dalam bidang perancangan, pembuatan dan
              pengembangan Web Devleopment. Memiliki minat untuk berkarir
              dibidang Web Development baik dalam bidang front-end maupun
              back-end.
            </p>
          </div>
          <div className="flex flex-col gap-3  ">
            <h1 className="text-3xl font-tinne">What I Do!</h1>
            <div className="flex justify-between">
              <CardKemampuan
                tipe="bg-primary500"
                icon={<SiEducative />}
                judul={"Web Development"}
              >
                Saya memiliki kemampuan untuk membuat web sederhana yang
                menggunakan framework react js. Kemampuan saya lebih baik dalam
                bidang front-end dibandingkan back-end.
              </CardKemampuan>
              <CardKemampuan
                tipe="bg-secondary500"
                icon={<TbNetwork />}
                judul={"Network Engenering"}
              >
                Untuk network enginer saya memiliki sedikit kemampuan untuk
                mengelola jaringan. saya memiliki sedikit kemampuan menggunakan
                mikrotik dan cisco.
              </CardKemampuan>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
