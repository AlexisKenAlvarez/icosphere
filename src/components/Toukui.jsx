/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 toukui.glb
Author: wany (https://sketchfab.com/cy10170909)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toukui-f43418b2fd05434aae5c47e00e4af1ff
Title: TOUKUI
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Helm(props) {

  const [mousePosition, setMouse] = useState({
    x: 0,
    y: 0
  })

  const windowRef = useRef((event) => {
    const x = (event.clientX / window.innerWidth) * 1 - 0.7;
    const y = -(event.clientY / window.innerHeight) * 1 + 0.7;
    setMouse({ x, y })
  })

  useEffect(() => {

    document.addEventListener("mousemove", windowRef.current);

    return () => {
      document.removeEventListener("mousemove", windowRef.current);

    }
  }, [])


  const { nodes, materials } = useGLTF('/helmet/toukui.glb')
  return (
    <group {...props} dispose={null} scale={0.25} position={[0, -0.8, 0]} rotation={[-mousePosition.y, mousePosition.x, 0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.phong1SG} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/helmet/toukui.glb')