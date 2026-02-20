// src/components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-oken-sand pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-oken-blue/5 rounded-full blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 w-[500px] h-[500px] bg-oken-wood/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="overflow-hidden mb-6">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold text-oken-blue tracking-tighter leading-none">
            OKEN
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xl md:text-2xl text-oken-dark/70 font-sans tracking-wide font-light">
            Modern Japanese Cuisine in Oakland
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            a
            href="https://www.opentable.com/restref/client/?rid=1432471&restref=1432471&lang=en-US&color=2&r3uid=cfe&dark=true&ot_source=Restaurant%20website&corrid=187e3eee-a66c-4d06-94d7-d4fa601f6be7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-oken-blue text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-oken-blue-dark transition-colors w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
            Reserve a Table
          </a>
          <a
            href="#menus"
            className="bg-transparent border border-oken-dark/20 text-oken-dark px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/50 hover:border-oken-dark/40 transition-colors w-full sm:w-auto text-center transform duration-300 hover:-translate-y-1"
          >
            View Menus
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-oken-dark/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-oken-dark/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
