import useHover from "./useHover";

const useHoverValues = <T>(trueValue: T, falseValue: T) => {
  const { isHovered, handleMouseHover } = useHover();

  return [isHovered ? trueValue : falseValue, handleMouseHover] as [
    T,
    typeof handleMouseHover
  ];
};
export default useHoverValues;
