import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Фон"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6">
        <motion.div
          style={{ y: photoY }}
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/5cf78603-bd8c-4dbb-a590-ef796f6c2cd4/bucket/d1b6bf3b-23d3-4a42-a9fb-ea39a4e35d4a.jpg"
              alt="Мастер"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="text-center lg:text-left text-white">
          <p className="text-sm md:text-base uppercase tracking-widest mb-3 opacity-70">Мастер индустрии красоты</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            КРАСОТА
          </h1>
          <p className="text-lg md:text-xl max-w-md opacity-90">
            Профессиональный уход за собой. Создаю образы, которые подчёркивают вашу индивидуальность.
          </p>
          <button className="mt-8 px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
}