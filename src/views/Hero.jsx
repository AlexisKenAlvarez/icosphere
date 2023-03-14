import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { Tb3DCubeSphere } from 'react-icons/tb'
import { motion } from 'framer-motion'
import IcoBg from '../three/IcoBg'

const Hero = () => {

    const navList = ['Home', 'About', 'Who are we']
    const ico = ['I', 'C', 'O', 'S', 'P', 'H', 'E', 'R', 'E']
    
    return (
        <>
            <nav className='w-full max-w-[1500px] mx-auto  right-0 flex items-center justify-center p-6 fixed top-0 left-0 z-20 text-white '>
                <ul className='flex items-center gap-x-20 font-poppins w-fit'>
                    {navList.map((items, i) => {
                        return (
                            <li key={i} className="cursor-pointer relative group">
                                {items}
                                <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", repeat: Infinity, duration: 4 }} className="absolute left-0 right-0 -bottom-7 mx-auto text-white w-fit pointer-events-none opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                                    <Tb3DCubeSphere className='text-2xl' />
                                </motion.div>

                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="w-full h-screen text-white flex items-center justify-center relative">

                <div className="w-auto h-auto fixed bottom-0 right-5 flex flex-col items-center justify-center text-raj font-medium z-10">
                    <p>01</p>
                    <div className="w-[2px] h-[10rem] bg-white"></div>
                </div>

                <div className="relative z-10 w-fit h-fit text-center pointer-events-none px-8">
                    <div className='font-bold md:text-9xl text-5xl font-raj pointer-events-none select-none flex items-center w-fit mx-auto'>
                        {ico.map((items, i) => {
                            return (
                                <motion.p initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, delay: i * 0.09 }} className="" key={i}>{items}</motion.p>
                            )
                        })}
                    </div>

                    <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, delay: 0.7 }} className="md:max-w-[48rem] max-w-[35rem] md:text-md text-sm  md:opacity-60 font-poppins pointer-events-none select-none">An icosphere is a 3D geometric shape made up of 20 equilateral triangles and 12 vertices, resulting in a sphere-like object with a more uniform surface than a traditional sphere.</motion.p>


                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.7, delay: 0.8 }} className="mx-auto w-fit h-auto mt-10 relative flex items-center pointer-events-auto cursor-pointer">
                        <div className="w-16 h-16 bg-white clip flex items-center justify-center">
                            <Tb3DCubeSphere className='text-black text-4xl' />
                        </div>
                        <div className="w-[10rem] h-10 bg-white -ml-5 bg-gradient-to-r from-white to-[#131313] z-10 relative">
                            <p className="font-raj text-black font-semibold mt-2">Get started</p>
                        </div>
                    </motion.div>
                </div>


                <div className="absolute top-0 left-0 w-full h-screen z-0">
                    <Canvas className='w-full h-screen' id="canvas" shadows>
                        <Suspense fallback={null}>
                            <IcoBg />
                        </Suspense>
                    </Canvas>
                </div>

            </div>
        </>
    )
}

export default Hero