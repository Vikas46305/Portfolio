import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {

    const Projects = [
        {
            Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
            title: "Youtube Backend",
            github: "https://github.com/Vikas46305/MERN_Youtube_Clone",
            live: "",
            description: "This backend project is a simplified version of a YouTube-like platform, built with Express.js and MongoDB, focusing on core functionality such as user authentication, video interaction (like/unlike), and channel features (subscribe/unsubscribe). JWT is used for secure, stateless authentication and protected routes.",
            tech: ["express js", "mongodb", "jwt", "postman"]
        },
        {
            Image: "https://cdn-icons-png.flaticon.com/512/12106/12106019.png",
            title: "Job Portal Backend",
            github: "https://github.com/Vikas46305/Job-Portal-Backend.git",
            live: "",
            description: "The Job Portal Backend is a secure RESTful API using Node.js, Express.js, and MongoDB. It supports job seekers, employers, and admins with features like job posts, applications, and role-based JWT authentication.",
            tech: ["express js", "mongodb", "jwt", "postman"]
        },
        {
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLfcCr32Cv4HJlpYKijzDesOJVG8ejA3hGnKurow8Fvn7Dxa54hYxOWdU4NNJpAWGYns&usqp=CAU",
            title: "Resume Builder With Gemini Ai",
            github: "https://github.com/Vikas46305/ResumeBuilder.ai.git",
            live: "https://airesume46305.netlify.app/",
            description: "An intelligent and modern resume builder powered by Gemini AI, built using Vite + React.js with advanced features like step-by-step form navigation, AI-assisted content generation, lazy loading with React Suspense, and full Redux Toolkit state management with Redux Persist for seamless user experience—even on page refresh.",
            tech: ["React js", "Redux", "Gemini Ai"]
        },
    ]

    return (
        <div className='py-5'>
            { /* Heading */}
            <div className='text-center'>
                <div className='text-2xl font-bold space-y-1'>
                    <h1>Project</h1>
                    <div className='bg-blue-600 h-1 w-20 mx-auto' />
                </div>
                <p className='text-sm'>A showcase of projects which i have worked on, Highlighting my skills in various technologies.</p>
            </div>

            { /* Projects */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-5'>
                {
                    Projects.map((item) => (
                        <div
                            key={item.title}
                            className='border p-3 rounded-xl'
                        >
                            { /*  Project Images */}
                            <div>
                                <img
                                    src={item.Image}
                                    alt={item.title}
                                    className='w-32 h-28 m-auto py-3'
                                />
                            </div>

                            { /* Title and description */}
                            <div>
                                <h1
                                    className='text-xl font-bold'>
                                    {item.title}
                                </h1>
                                <p
                                    className='text-sm'>
                                    {item.description}
                                </p>

                                { /* Technologies */}
                                <div
                                    className='flex flex-wrap items-center gap-3 my-3'>
                                    {
                                        item.tech.map((tech, index) => (
                                            <p
                                                key={index} className='bg-indigo-900 px-3 rounded-2xl text-gray-100 text-sm'>
                                                {tech}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='flex items-center gap-5 my-3 font-semibold'>
                                <Link
                                    target='_blank'
                                    className='hover:text-rose-700 hover:underline hover:font-bold transition-all'
                                    to={item.github}
                                >
                                    Github Code
                                </Link>
                                {
                                    (
                                        item.live != ""
                                        && item.live.length != 0
                                    )
                                    && <Link
                                        target='_blank'
                                        className='hover:text-rose-700 hover:underline hover:font-bold transition-all'
                                        to={item.live}>
                                        Live Code
                                    </Link>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Project