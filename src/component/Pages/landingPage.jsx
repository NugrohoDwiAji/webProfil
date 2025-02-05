import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish && onFinish();
      navigate("/about");
    }, 3000);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-32 h-32"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, yoyo: Infinity }}
      />
    </div>
  );
}
