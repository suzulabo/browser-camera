import { Config } from "@stencil/core";

// https://stenciljs.com/docs/config

const BASE_URL = "https://suzulabo.github.io/browser-camera/";

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: BASE_URL,
    },
  ],
  devServer: {
    openBrowser: false,
  },
};
