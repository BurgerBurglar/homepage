import { useMediaQuery } from "react-responsive";

export const useIsTablet = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return isTablet;
};
