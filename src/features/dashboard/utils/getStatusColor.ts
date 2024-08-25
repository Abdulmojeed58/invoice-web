export const getStatusColor = (status: string): string => {
  let color: string;
  switch (status) {
    case "canceled":
      color = "primary";
      break;
    case "completed":
      color = "darkGreen";
      break;
    case "completed":
      color = "darkGreen";
      break;
    case "failed":
      color = "lightRed";
      break;
    default:
      color = "";
  }

  return color;
};
