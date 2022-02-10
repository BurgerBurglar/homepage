import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const useBreakPoint = (maxWidth = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const isReallySmallScreen = useMediaQuery({
    query: `(max-width: ${maxWidth}px)`,
  });

  useEffect(() => {
    setIsSmallScreen(isReallySmallScreen);
  }, [isReallySmallScreen]);

  return isSmallScreen;
};
