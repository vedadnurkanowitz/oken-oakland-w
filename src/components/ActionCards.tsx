// src/components/ActionCards.tsx
import { motion } from "framer-motion";

const cards = [
  {
    title: "Lunch Menu",
    desc: "Thurs - Sun, 11am - 2pm",
    link: "https://www.okenoakland.com/s/011226OKENLUNCHmenuWEBSITE.pdf",
    color: "bg-oken-sand/50",
    hoverBorder: "hover:border-oken-wood",
  },
  {
    title: "Dinner Menu",
    desc: "Thurs - Sun, Evenings",
    link: "https://www.okenoakland.com/s/011226OKENmenuWEBSITE.pdf",
    color: "bg-oken-sand/50",
    hoverBorder: "hover:border-oken-blue",
  },
  {
    title: "Gift Cards",
    desc: "Treat someone special",
    link: "https://order.toasttab.com/egiftcards/oken-6200-claremont-avenue",
    color: "bg-oken-blue/5 text-oken-blue",
    hoverBorder: "hover:border-oken-blue",
  },
];

export default function ActionCards() {
  return (
    <section id="menus" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-oken-dark mb-4">
          Discover Our Menus
        </h2>
        <div className="w-16 h-1 bg-oken-wood mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group relative p-10 rounded-2xl flex flex-col items-start min-h-[250px] border border-transparent transition-colors duration-300 ${card.color} ${card.hoverBorder} shadow-sm hover:shadow-xl cursor-pointer overflow-hidden backdrop-blur-sm`}
          >
            <div className="flex-1 z-10">
              <h3 className="text-3xl font-serif font-semibold mb-3 group-hover:text-oken-blue transition-colors">
                {card.title}
              </h3>
              <p className="text-oken-dark/60 font-medium tracking-wide">
                {card.desc}
              </p>
            </div>

            <div className="self-end mt-8 z-10 w-12 h-12 rounded-full border border-oken-dark/10 flex items-center justify-center group-hover:bg-oken-blue group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:-rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
