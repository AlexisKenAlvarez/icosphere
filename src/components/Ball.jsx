/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb
Author: Arigaia Sekuin (https://sketchfab.com/arigaia.sekuin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/abstract-ball-ffafe62053a745b8b2c8182e59239e79
Title: Abstract Ball
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Environment, Html, useTexture } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Ball(props) {
    const { nodes, materials } = useGLTF('/ball/model.glb')
    const ballRef = useRef(null)
    const innerRef = useRef(null)
    const innerRef2 = useRef(null)
    const outerRef = useRef(null)
    const outerRef2 = useRef(null)


    useFrame(() => {
        innerRef.current.rotation.y += 0.01;
        innerRef2.current.rotation.y += 0.01;
        outerRef.current.rotation.y += 0.02;
        outerRef2.current.rotation.y += 0.01;
    })

    useEffect(() => {

        const tl = gsap.timeline()


        tl.to(ballRef.current.position, {
            y: 1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        })



    }, [])
    return (
        <group {...props} dispose={null} scale={0.3} position={[0, 0.25, 0]} ref={ballRef}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Icosphere002_0.geometry} material={materials['ballz2.002']} rotation={[0.08, 1.31, 0.9]} scale={1.25} ref={innerRef} />
                <mesh geometry={nodes.Icosphere003_0.geometry} material={materials['Lightballz.002']} rotation={[0.08, 1.31, 0.9]} scale={1.25} ref={innerRef2} />
                <mesh geometry={nodes.Cube002_0.geometry} material={materials['Wireframy.002']} rotation={[-2.55, 0.87, -3.14]} scale={1.25} ref={outerRef} />
                <mesh geometry={nodes.Cube003_0.geometry} material={materials['Ballz.002']} rotation={[-0.57, 1, 1.71]} scale={1.25} ref={outerRef2} />
            </group>
        </group>
    )
}

useGLTF.preload('/ball/model.glb')