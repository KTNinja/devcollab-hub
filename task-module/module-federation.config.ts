export default {
  name: "taskModule",
  filename: "remoteEntry.js",
  exposes: {
    "./TaskDashboard": "./src/components/TaskDashboard",
    "./TaskAPI": "./src/services/TaskAPI"
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
  }
};
