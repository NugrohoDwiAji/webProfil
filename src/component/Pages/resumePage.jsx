import CardResume from "../CardResume";
import Copyright from "../Copyright";
import ProfilLayout from "../Layouts/ProfilLayout";
import Navbar from "../Navbar";
import { MdCastForEducation } from "react-icons/md";
import SkilBar from "../SkilBar";

const resume = [
  {
    id: 1,
    tanggal: "2021 - Sekarang",
    Ket: "Mataram, NTB",
    desc: "S1 Teknologi Informasi - Universitas Bumigora",
    color: "primary",
  },
  // {
  //   id: 2,
  //   tanggal: "22 Juli 2023 - 8 Oktober 2023",
  //   Ket: "Mataram, NTB",
  //   desc: "Fullstack Typescript & UI/UX Design - Brida School Academy",
  //   color: "secondary",
  // },
  {
    id: 3,
    tanggal: "16 Februari 2024 - 30 Juni 2024",
    Ket: "Daring",
    desc: "Web Developer - Infinite Learning",
    color: "primary",
  },
];

const skil = [
  { judul: "Javascript", persentase: 80, color: "primary", width: "w-[80%]" },
  { judul: "Typescript", persentase: 70, color: "secondary", width: "w-[70%]" },
  { judul: "Cisco", persentase: 65, color: "primary", width: "w-[65%]" },
  { judul: "Mikrotik", persentase: 70, color: "secondary", width: "w-[70%]" },
];

const knowlage = [
  { text: "Web Design", color: "primary" },
  { text: "Web Dev", color: "secondary" },
  { text: "Network", color: "primary" },
  { text: "Social Media", color: "secondary" },
  { text: "Comunication", color: "primary" },
  { text: "Time Managemen", color: "secondary" },
];

const ResumePage = () => {
  return (
    <div className="min-h-screen max-w-full flex items-end justify-center gap-[1.88rem] gradien ">
      <ProfilLayout />
      <div className="flex flex-col gap-[1.88rem] items-end">
        <Navbar />
        <div className="bg-white w-[40.4rem] h-[27rem] rounded-t-3xl px-10 py-10 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="flex items-end gap-5 font-semibold text-4xl font-tinne">
              Resume
              <hr className="h-1 w-1/2" />
            </h1>
            <section className="flex flex-col gap-3 mb-12">
              <h1 className="font-tinne text-gray-700 text-2xl flex [&>svg]:text-primary500 gap-2 items-center">
                <MdCastForEducation /> Education
              </h1>
              <div className="flex flex-wrap gap-7">
                {resume.map((item) => (
                  <CardResume
                    tanggal={item.tanggal}
                    ket={item.Ket}
                    key={item.id}
                    color={item.color}
                  >
                    {item.desc}
                  </CardResume>
                ))}
              </div>
            </section>
            <div className="flex gap-12">
              <section>
                <h1 className="font-tinne text-gray-700 text-2xl flex items-center mb-4">
                  Skills
                </h1>
                {skil.map((item, key) => (
                  <div className="mb-3">
                    <SkilBar
                      judul={item.judul}
                      color={item.color}
                      persentase={item.persentase}
                      key={key}
                      width={item.width}
                    />
                  </div>
                ))}
              </section>
              <section>
                <h1 className="font-tinne text-gray-700 text-2xl mb-4">
                  Knowlge
                </h1>
                <div className="flex flex-wrap gap-2">
                  {knowlage.map((item) => (
                    <h2 className={`bg-${item.color}500 bg-opacity-30 py-1  px-2 rounded-lg max-w-fit`}>
                      {item.text}
                    </h2>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
