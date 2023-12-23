/** @type {import('@remix-run/dev').AppConfig} */
export default {
  postcss: true,
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  browserNodeBuiltinsPolyfill: { modules: { path: true, os: true, crypto: true } }
};
