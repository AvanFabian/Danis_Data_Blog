/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

// const nextConfig = {
//     compiler:{
//         removeConsole: true,
//     }
// };

// module.exports = withContentlayer({ ...nextConfig });

const nextConfig = { reactStrictMode: false, swcMinify: true }

module.exports = withContentlayer(nextConfig)