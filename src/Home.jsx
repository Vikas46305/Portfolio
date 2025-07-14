import React from 'react'
import { lazy } from 'react'

const Hero = lazy(() => import("./components/Hero"))
const Skill = lazy(() => import("./components/Skill"))
const Project = lazy(() => import("./components/Project"))
const Contact = lazy(() => import("./components/Contact"))

const Home = () => {
    return (
        <div className='w-[90%] md:w-[80%] m-auto py-8'>
            <Hero />
            <Skill />
            <Project />
            <Contact />
        </div>
    )
}

export default Home