import { useState, useEffect } from "react";

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    function updateTouchDeviceStatus() {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches ||
          window.matchMedia("(hover: none)").matches
      );
    }
    updateTouchDeviceStatus();
    window.addEventListener("resize", updateTouchDeviceStatus);
    return () => window.removeEventListener("resize", updateTouchDeviceStatus);
  }, []);
  
  return isTouchDevice;
}