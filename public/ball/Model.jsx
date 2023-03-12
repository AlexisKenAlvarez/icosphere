/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb
Author: Arigaia Sekuin (https://sketchfab.com/arigaia.sekuin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/abstract-ball-ffafe62053a745b8b2c8182e59239e79
Title: Abstract Ball
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Icosphere002_0.geometry} material={materials['ballz2.002']} rotation={[0.08, 1.31, 0.9]} scale={1.25} />
        <mesh geometry={nodes.Icosphere003_0.geometry} material={materials['Lightballz.002']} rotation={[0.08, 1.31, 0.9]} scale={1.25} />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials['Wireframy.002']} rotation={[-2.55, 0.87, -3.14]} scale={1.25} />
        <mesh geometry={nodes.Cube003_0.geometry} material={materials['Ballz.002']} rotation={[-0.57, 1, 1.71]} scale={1.25} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
