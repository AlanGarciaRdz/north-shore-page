module.exports = {
  apps: [
    {
      name: 'north-shore-page',
      instances: 1,
      autorestart: true,
      watch: false,
      interpreter: './node_modules/ts-node/dist/bin.js',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: 'production'
      },
    },
  ],
};
