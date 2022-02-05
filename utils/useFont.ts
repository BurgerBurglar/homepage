import { useRouter } from "next/router";

export const useFont = () => {
  const router = useRouter();
  const fontFamily =
    router.pathname === "/"
      ? '"Comic Sans MS", "Comic Sans", cursive;"'
      : "Roboto";
  return fontFamily;
};
