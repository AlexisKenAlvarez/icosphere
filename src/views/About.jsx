import { useFrame } from '@react-three/fiber'
import React, { useState, useEffect, useRef } from 'react'
import Helmet from '../three/Helmet'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


const About = () => {


    return (
        <section className="bg-black h-screen w-full text-white z-10 relative" >

            <div className="w-fit mx-auto flex gap-x-20" >
                <h1 className='font-raj text-7xl font-bold'>Integrated in Viking</h1>
                <div className="w-[40rem] h-[40rem]">
                    <Canvas className='w-full h-full' shadows>
                        <Suspense fallback={null}>
                            <Helmet />
                        </Suspense>
                    </Canvas>
                </div>
            </div>




        </section>
    )
}

export default About