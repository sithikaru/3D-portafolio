import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const Loader = () => {
  const {progress}=useProgress();
  return (
    <Html>
      <span className='canvas-load text-left items-start justify-center'>
      <p className='font-extrabold text-gray-400 mt-[40px]'>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader