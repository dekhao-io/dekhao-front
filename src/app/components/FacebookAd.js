import React, { useRef, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { nextStep, previousStep, resetStep } from "../redux/stepSlice";
import { nextStep, previousStep, resetStep } from "@/redux/stepSlice";
import * as THREE from "three";
import FirstUI from "./steps/FirstUI";
import { useDispatch, useSelector } from "react-redux";
// import SecondUI from "./steps/SecondUI";
// import ThirdUI from "./steps/ThirdUI";
// import FourthUI from "./steps/FourthUI";
// import FifthUI from "./steps/FifthUI";

const FacebookAd = () => {
  // const currentStep = useSelector((state) => state.step.currentStep);
  const currentStep = useSelector((state) => state.step.currentStep);
  const dispatch = useDispatch();
  const canvasRef = useRef();

  useEffect(() => {
    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animate Cube
    let frameId;
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => cancelAnimationFrame(frameId);
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstUI />;
      // case 2:
      //   return <SecondUI />;
      // case 3:
      //   return <ThirdUI />;
      // case 4:
      //   return <FourthUI />;
      // case 5:
      //   return <FifthUI />;
      default:
        return <FirstUI />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* UI Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {renderStep()}
        <div className="mt-4">
          {currentStep > 1 && (
            <button
              className="px-6 py-2 bg-gray-400 text-white rounded-full mx-2"
              onClick={() => dispatch(previousStep())}
            >
              Back
            </button>
          )}
          {currentStep < 5 && (
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-full mx-2"
              onClick={() => dispatch(nextStep())}
            >
              {currentStep === 4 ? "Save & Continue" : "Continue"}
            </button>
          )}
          {currentStep === 5 && (
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-full mx-2"
              onClick={() => dispatch(resetStep())}
            >
              Restart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacebookAd;
