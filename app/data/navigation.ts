export interface NavLink {
  label: string;
  href: string;
}

export interface NavAction {
  label: string;
  href: string;
}

export const navigationData = {
  links: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "OUR EVENTS", href: "/events" },
  ] as NavLink[],
  cta: {
    label: "PLAN YOUR EVENT",
    href: "/contact",
  } as NavAction,
  location: {
    label: "Find Us On Google Maps",
    href: "https://maps.app.goo.gl/B4V1NdvXd2WRkqvT6",
  },
};
