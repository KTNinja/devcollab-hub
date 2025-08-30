export default {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    taskModule: "taskModule@http://localhost:3001/remoteEntry.js",
    notificationModule: "notificationModule@http://localhost:3002/remoteEntry.js",
    collaborationModule: "collaborationModule@http://localhost:3003/remoteEntry.js"
  },
  exposes: {},
  shared: {
    react: { singleton: true, requiredVersion: "^18.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
  }
};
