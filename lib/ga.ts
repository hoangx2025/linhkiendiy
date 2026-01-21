import ReactGA from "react-ga4";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-EQBGQHD8K8";

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) return;
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPage = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};