module.exports = {
  apps: [
    {
      name: "jenkins-test",
      script: "build/app.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
