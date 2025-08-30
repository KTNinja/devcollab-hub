export default {
  name: "notificationModule",
  filename: "remoteEntry.js",
  exposes: {
    "./NotificationCenter": "./src/components/NotificationCenter",
    "./NotificationContext": "./src/context/NotificationContext"
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
  }
};
