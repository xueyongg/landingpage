import ReactGA from "react-ga";

export const initGA = () => {
  console.log(
    "GA init " + (window.document.domain === "localhost" ? true : false)
  );
  ReactGA.initialize("UA-119971042-1", {
    gaOptions: {
      userId: window.document.cookie,
      debug: true,
      testmode: window.document.domain === "localhost" ? true : false
    }
  });
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
