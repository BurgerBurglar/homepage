import { parseISO, format } from "date-fns";

const formatDate = (isoDateTime: string) => {
  const date = parseISO(isoDateTime);
  return format(date, "Pp");
};
export default formatDate;
