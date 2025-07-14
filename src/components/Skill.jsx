import React from 'react'

const Skills = () => {

    const Skill = [
        {
            Frontend: ["HTML", "CSS", "JAVASCRIPT", "React js", "Tailwind css", "Redux", "Zustand", "GSAP", "Framer Motion", "Shadcn UI", "Material UI"]
        },
        {
            Backend: ["Node Js", "Express Js", "Mongodb", "Mysql", "Redis", "Rabbitmq", "Prisma", "AWS"]
        },
        {
            Language: ["Javascript", "Java", "Typescript"]
        },
        {
            Tool: ["Git", "Github", "VS Code", "Postman", "Compass", "Docker", "Netlify", "Vercel", "Photoshop"]
        }
    ]

    return (
        <div className='py-5'>
            { /*  Heading */}
            <div className='text-center'>
                <div>
                    <h1 className='text-2xl font-bold'>Skills</h1>
                    <div className='bg-blue-600 w-16 h-1 mx-auto' />
                </div>
                <p className='text-sm my-2'>
                    A collection of my technical skill and expertise honed through various projects
                </p>
            </div>

            {  /* Skills Map */}
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4'>
                {Skill.map((category, index) => {
                    const categoryName = Object.keys(category)[0]
                    const skillsList = category[categoryName];

                    return (
                        <div key={index} className='border p-4 rounded shadow'>
                            <h2 className='text-lg font-semibold capitalize mb-2'>{categoryName}</h2>
                            <ul className='list-none list-inside grid grid-cols-2 md:grid-cols-3 text-center gap-4'>
                                {skillsList.map((skill, i) => (
                                    <li key={i} className='px-4 py-0.5 rounded-2xl border'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills