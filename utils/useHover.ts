import { MouseEvent, useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (e.type === "mouseenter") {
      setIsHovered(true);
    } else if (e.type === "mouseleave") {
      setIsHovered(false);
    }
  };

  return { isHovered, handleMouseHover };
};
export default useHover;
