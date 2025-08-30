export default {
  name: "collaborationModule",
  filename: "remoteEntry.js",
  exposes: {
    "./CollaborativeForm": "./src/components/CollaborativeForm"
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
  }
};
