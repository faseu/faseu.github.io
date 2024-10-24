import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ParticlesContainer,
} from '../../components/index.js';
import { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen.jsx';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Import GLTFLoader from three.js

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Use three.js GLTFLoader to load a 3D model (replace 'path/to/your/model.glb' with your model's path)
      const loader = new GLTFLoader();
      const modelPromise = new Promise((resolve) => {
        loader.load('./cyber_djinn/scene.gltf', (gltf) => {
          // You can use the loaded GLTF object if needed
          resolve(gltf);
        });
      });

      await Promise.all([modelPromise]);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {/*{<LoadingScreen loading={loading} />}*/}
      <div className="relative z-0 bg-light-bg">
        <Navbar />
        <div className="relative z-0 bg-img bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <ParticlesContainer />
          <Hero loading={loading} />
          {<StarsCanvas />}
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};

export default Home;
