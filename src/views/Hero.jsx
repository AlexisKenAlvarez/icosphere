import React, { useEffect, useRef } from 'react'
import { Environment, Html, useTexture } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { degToRad } from '../../utils/threeUtils'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

import { Ball } from '../components/Ball'


const Hero = () => {

    const [ambientTexture, baseColorTexture, heightTexture, normalTexture, roughnessTexture] = useTexture(["/texture/furambient.jpg", "/texture/furbasecolor.jpg", "/texture/furheight.png", "/texture/furnormal.jpg", "/texture/furroughness.jpg"])

    const orbitControlsRef = useRef(null)
    const ballRef = useRef(null)

    useFrame((state) => {
        const { x, y } = state.mouse

        const orbit = orbitControlsRef.current
        orbit.enablePan = false
        orbit.setAzimuthalAngle(-x * (degToRad(90)))
        orbit.setPolarAngle((degToRad(y + 8) * 10))
        orbit.enableRotate = false
        orbit.enableZoom = false
    })



    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitControlsRef} maxPolarAngle={degToRad(89)} />


            <Ball />

            <mesh rotation={[-(degToRad(90)), 0, 0]} position={[0, -0.3, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#080808" />
            </mesh>

            <ambientLight args={["#ffffff", 0.20]} />
            <spotLight args={['#ffffff', 20, 6.5, degToRad(45), 0.4]} position={[0, 4.5, 0]} castShadow />

            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 50, 50]} />
                    <meshBasicMaterial color="#080808" side={THREE.BackSide} />
                </mesh>
            </Environment>
        </>
    )
}

export default Hero

