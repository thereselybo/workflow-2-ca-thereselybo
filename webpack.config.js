const path = require("path");

module.exports = {
  //   entry: "./src/",
  //   entry: [
  //     "./src/js/index.ts",
  //     "./src/js/missions.ts",
  //     "./src/js/contact.ts",
  //     "./src/js/mars.ts",
  //   ],
  entry: {
    index: "./src/js/index.ts",
    missions: "./src/js/missions.ts",
    contact: "./src/js/contact.ts",
    mars: "./src/js/mars.ts",
  },
  output: {
    // filename: "index.js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  //   watch: true,
};
