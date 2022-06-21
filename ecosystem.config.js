module.exports = {
  apps: [
    {
      name: 'hau-server',
      script: 'build/app.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
