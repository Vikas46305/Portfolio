import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Hero = () => {
    const Menus = [
        {
            logo: <i className="ri-whatsapp-line"></i>,
            text: "+91 8795915044",
        },
        {
            logo: <i className="ri-at-line"></i>,
            text: "vikassharma46305@gmail.com",
        },
        {
            logo: <i className="ri-map-pin-2-fill"></i>,
            text: "Uttar Pradesh, India",
        },
    ];

    return (
        <div>
            <div className="md:flex items-center gap-28 space-y-4">
                {/* Photo section  */}
                <div className="relative z-[1]">
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.05}
                        className="rounded-full"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/154689108?v=4"
                            alt="Vikas"
                            className="w-56 h-56 rounded-full p-1 shadow shadow-amber-700 m-auto"
                        />
                    </Tilt>
                </div>

                {/*  Details section */}
                <div>
                    {/* Name */}
                    <div>
                        <p className="text-xl font-semibold">
                            Hello Everyone :)
                        </p>
                        <h1 className="text-4xl font-bold my-1">
                            I'm Vikas Sharma
                        </h1>
                    </div>

                    {/*  Mobile and Typing Effect */}
                    <div>
                        {/* Typing Effect */}
                        <div className="flex items-center gap-1.5 text-xl">
                            I am a
                            <p className="text-yellow-500 font-semibold">
                                <Typewriter
                                    words={[
                                        "React Developer",
                                        "Frontend Developer",
                                        "Node Developer",
                                    ]}
                                    loop
                                    cursor
                                    cursorStyle="~"
                                    typeSpeed={55}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </p>
                        </div>

                        {/* Mobile and Other */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
                            {Menus.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <p className="text-xl text-yellow-600">
                                        {item.logo}
                                    </p>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Resume Download */}
                        <div>
                            <Link
                                to="https://drive.google.com/file/d/1wYiDr-UrIOzszEG60tHeuxcGVi74Pgmf/view?usp=sharing"
                                target="_blank"
                                className="bg-indigo-900 px-5 py-2 text-gray-200 rounded-full"
                            >
                                Download Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*  About text */}
            <div className="md:px-5 my-5 md:leading-7">
                I'm a passionate MERN stack developer focused on building
                interactive, responsive web applications. I’ve worked on
                personal and academic projects using MongoDB, Express.js,
                React.js, and Node.js. I enjoy creating user-friendly
                experiences with clean design, smooth animations, and seamless
                transitions. Committed to continuous learning, I strive to
                deliver impactful, modern web solutions.
            </div>
        </div>
    );
};

export default Hero;
