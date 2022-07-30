const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: 'doyu',
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog-dev',
      },
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: 'doyu',
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-blog',
    },
  };
};

module.exports = nextConfig;
