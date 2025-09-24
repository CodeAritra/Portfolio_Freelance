import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // ✅ Dynamic links
  const links = [];
  if (data.about) links.push({ href: "about", label: "About" });
  if (data.skills) links.push({ href: "skills", label: "Skills" });
  if (data.projects) links.push({ href: "projects", label: "Projects" });
  if (data.services) links.push({ href: "services", label: "Services" });
  if (data.work) links.push({ href: "work", label: "Work" });
  if (data.testimonials) links.push({ href: "testimonials", label: "Testimonials" });
  if (data.contact) links.push({ href: "contact", label: "Contact" });

  // ✅ Smooth scroll without # in URL
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-xl font-bold">My Portfolio — Demo</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScroll(link.href)}
              className="btn btn-ghost btn-sm text-sm"
            >
              {link.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="btn btn-circle btn-ghost text-xl">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-base-100 shadow-lg flex flex-col items-center py-4 space-y-3">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScroll(link.href)}
              className="btn btn-ghost btn-sm w-full text-center"
            >
              {link.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="btn btn-circle btn-ghost text-xl mt-2">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </nav>
  );
}
