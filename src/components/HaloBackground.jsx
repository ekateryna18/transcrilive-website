import React, { useEffect, useRef, useState } from "react";

const HaloBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.HALO({
        el: myRef.current,
         mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100.00,
        minWidth: 100.00,
        baseColor: 0x689,
        backgroundColor: 0x0B1120,
        amplitudeFactor: 0.00,
        xOffset: 0.2,
        yOffset: 0.05,
        size: 1,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef} className="w-full h-screen"></div>;
};

export default HaloBackground;
