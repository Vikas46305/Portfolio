import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../Theme/contaxt";

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const HandleScroll = () => {
            setScroll(window.scrollY > 10);
        };

        window.addEventListener("scroll", HandleScroll);
        return () => window.removeEventListener("scroll", HandleScroll);
    }, []);

    return (
        <>
            <nav
                className={`flex items-center justify-between px-8 py-2 cursor-pointer 
                ${
                    theme == "dark" && "shadow-white"
                } shadow fixed bg-transparent w-full top-0 left-0 right-0 
                ${
                    scroll
                        ? "backdrop-blur-md bg-white/30 dark:bg-black/30 z-[9999]"
                        : ""
                }`}
            >
                {/* Nav Logo */}
                <Link to="/" className="cursor-pointer">
                    <img src="/Logo.png" alt="Logo" className="w-32" />
                </Link>

                {/* Git link and Theme button */}
                <div className="flex items-center gap-3 text-2xl">
                    <button
                        onClick={() =>
                            setTheme(theme == "light" ? "dark" : "light")
                        }
                        className="hover:scale-110 transition-all"
                    >
                        <i className="ri-sun-fill"></i>
                    </button>
                    <Link
                        to="https://github.com/Vikas46305"
                        target="_blank"
                        className="hover:scale-110 transition-all"
                    >
                        <i className="ri-github-fill"></i>
                    </Link>
                    <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/vikas46305/"
                        className="hover:scale-110 transition-all"
                    >
                        <i className="ri-linkedin-box-fill"></i>
                    </Link>
                </div>
            </nav>

            {/*  Outlet */}
            <div className="py-7 ">
                <Outlet />
            </div>
        </>
    );
};

export default Navbar;
