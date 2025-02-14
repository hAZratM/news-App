"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDate = (dateUnix, timezone) => {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
  // Format: Sunday 17 Jan
};

export const getHours = (timeUnix, timezone) => {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
  //   Output-Format: 6 PM
};

export const mps_to_kmh = (mps) => {
  return mps * 3.6;
  //   It will return the speed in km/h
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Ideal air quality for all outdoor activities. Perfect for exercise and recreation.",
  },
  2: {
    level: "Fair",
    message:
      "Generally safe air quality. Sensitive individuals should monitor breathing during extended outdoor activities.",
  },
  3: {
    level: "Moderate",
    message:
      "Sensitive groups should reduce outdoor exposure. Consider indoor alternatives for strenuous activities.",
  },
  4: {
    level: "Poor",
    message:
      "Everyone should limit outdoor activities. Keep windows closed and use air purifiers if available.",
  },
  5: {
    level: "Very Poor",
    message:
      "Avoid all outdoor activities. Stay indoors with filtered air. Wear masks if outdoors is necessary.",
  },
};
