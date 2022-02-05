import { useRouter } from "next/router";

export const useFont = () => {
  const router = useRouter();
  const fontFamily =
    router.pathname === "/" ? '"Comic Neue", cursive;"' : "Roboto";
  return fontFamily;
};
