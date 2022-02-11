const getIdPosition = (id: string) => {
  const el = document.getElementById(id);
  const documentTop = document.documentElement.getBoundingClientRect().top;
  const elTop = el?.getBoundingClientRect()?.top;
  if (elTop === undefined) return undefined;
  return elTop - documentTop;
};

const getNavbarBgColor = (position: number) => {
  const navbarColorMap = [
    { id: "me", bgColor: "corn" },
    { id: "work", bgColor: "theme" },
    { id: "contact", bgColor: "accent" },
  ];
  navbarColorMap.reverse();

  const navbarBgColor = navbarColorMap.find(({ id }) => {
    const idPosition = getIdPosition(id);
    return idPosition !== undefined && position >= idPosition;
  })?.bgColor;

  return navbarBgColor;
};

export default getNavbarBgColor;
