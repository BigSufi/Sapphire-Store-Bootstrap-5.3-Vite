import { resolve } from "path";
import purgecss from "@fullhuman/postcss-purgecss";

export default {
  root: resolve(__dirname, "src"),

  // css: {
  //   postcss: {
  //     plugins: [
  //       purgecss({
  //         content: ["./**/*.html"],
  //         safelist: [/^carousel-item/],
  //       }),
  //     ],
  //   },
  // },

  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
};
