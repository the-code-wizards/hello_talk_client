/** @type {import('next').NextConfig} */
// const withRedux = require('next-redux-wrapper');
// const store = require('./store');

// module.exports = withRedux(store)({});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = nextConfig;
