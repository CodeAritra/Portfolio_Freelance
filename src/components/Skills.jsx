import React from "react";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 ">
      <motion.div
        className="bg-base-100 rounded-xl shadow-xl p-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        // variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        <h3 className="text-3xl font-bold text-center mb-10">Skills</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="card bg-base-100 shadow-md hover:shadow-2xl transition"
            >
              <div className="card-body items-center text-center">
                {/* Icon */}
                <div className="text-4xl mb-3 text-primary">{s.icon}</div>

                {/* Title */}
                <h4 className="card-title text-lg font-semibold">{s.title}</h4>

                {/* Description */}
                <p className="text-sm opacity-80 mt-2">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
