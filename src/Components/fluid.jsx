import React, { useState, useEffect } from 'react';
import './canvas.css';
const Fluid = () => {
  const [style, setStyle] = useState({
    color: 'white',
    height: '100%', // Canvas will respond to size changes without resetting fluid!
    width: '100%',
    margin: 0,
    
  });

  useEffect(() => {
    const loadScript = async () => {
      try {
        // Dynamically import the script
        const module = await import('../assets/js/fluid-init.js');
        // Call the function to initialize fluid simulation if it exists
        // if (module && typeof module.initFluidSimulation === 'function') {
        //     console.log(module && typeof module.initFluidSimulation)
        // //   module.initFluidSimulation(document.querySelector('.fluid-canvas'));
        // }
      } catch (error) {
        console.error('Failed to load fluid-init.js:', error);
      }
    };

    loadScript();

    return () => {
      // Cleanup script when component unmounts
      // Note: This might not be necessary depending on your use case
    };
  }, []);

  return <canvas className="fluid-canvas " style={style}></canvas>;
};

export default Fluid;
// canvas {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1; /* Ensure the canvas is behind other content */
// }