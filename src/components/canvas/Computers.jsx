/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./cyber_djinn/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1000} groundColor="black" />

      <pointLight intensity={0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.14}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.25}
        position={isMobile ? [0, -4.2, 0] : [0, -3.9, 0]}
        rotation={[-0.01, 4.6, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ loading }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 755px)');

    // initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add the callback function as a listender for changes to the
    // media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader loading={loading} />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
