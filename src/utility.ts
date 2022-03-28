export const getIconName = (network: string): string => {
  switch (network.toLowerCase()) {
    case "facebook":
      return "facebook-f";
    case "twitter":
      return "twitter";
    case "instagram":
      return "instagram";
    case "google":
      return "google";
    case "linkedin":
      return "linkedin-in";
    case "pinterest":
      return "pinterest-p";
    case "tumblr":
      return "tumblr";
    default:
      return "";
  }
};
