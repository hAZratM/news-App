"use strict";

import { updateWeather, error404 } from "../main.js";
const defaultLocation = "#/weather?lat=12.9716&lon=77.5946"; // location: Bengaluru

const currentLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    ({ latitude, longitude }) => {
      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
};

const searchedLocation = (query) => updateWeather(...query.split("&"));

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = () => {
  const requestURL = window.location.hash.slice(1);

  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL];

  routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
