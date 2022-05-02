module.exports = {
  apps: [
    {
      name: 'NORTH-SHORE-PAGE',
      instances: 1,
      interpreter: './node_modules/ts-node/dist/bin.js',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: false,
      env_stage: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
