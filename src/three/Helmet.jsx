import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import React, { useRef } from 'react'
import { Helm } from '../components/Toukui'
import { degToRad } from '../../utils/threeUtils'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


const Helmet = () => {

    const orbitControl = useRef(null)

    useFrame((state) => {
        const orbit = orbitControl.current
        
        orbit.enablePan = false
        orbit.enableRotate = false
        orbit.enableZoom = false
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitControl} />

            <Helm />

            <ambientLight args={["#ffffff", 1]} />
            <spotLight args={['#ffffff', 40, 6.5, degToRad(45), 0.4]} position={[0, 4.5, 0]} castShadow />


            {/* <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 50, 50]} />
                    <meshBasicMaterial color="#ffffff" side={THREE.BackSide} />
                </mesh>
            </Environment> */}

        </>
    )
}

export default Helmet