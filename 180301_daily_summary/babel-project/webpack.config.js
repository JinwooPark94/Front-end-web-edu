const path = require("path");

module.exports = {
  // 초기 로더 js 값 설정
  entry: {
    entry: "./src/js/entry.js"
  },
  output: {
    // 어떤 이름으로 저장할 것인가
    filename: "bundle.js",
    // 어느 위치에 저장할 것인가
    path: path.resolve(__dirname, "dist/js")
  },
  // 외부 라이브러리 관련된 설정
  module: {
    rules: [
      {
        // 모든 js 파일
        test: /\.js$/,
        // src/js 파일안에 있는
        include: [path.resolve(__dirname, "src/js")],
        // node_modules를 제외하고 사용
        exclude: /node_modules/,
        use: {
          // option의 설정을 사용하여 babel을 실행하여라
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  // source-map도 만들며, 여러 자바스크립트가 뭉쳐져 있는 상태에서 파일별로 볼 수 있게 만들어줌
  devtool: "source-map",
  mode: "development" // Webpack V4에서 추가
};
