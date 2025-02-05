import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import ProfilLayout from "./Layouts/ProfilLayout";

export default function SlidingCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center">
      <motion.div
        className="w-full max-w-md bg-white shadow-lg rounded-t-2xl p-4 fixed bottom-0 flex flex-col items-center"
        initial={{ y: "50%" }}
        animate={{ y: isOpen ? "0%" : "93%" }}
        transition={{ type: "spring", stiffness: 100 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 300 }}
        onDragEnd={(event, info) => {
          if (info.point.y > window.innerHeight - 200) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      >
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronUp size={24} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
        <ProfilLayout/>
      </motion.div>
    </div>
  );
}
