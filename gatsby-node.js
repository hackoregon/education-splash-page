exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-map-gl-geocoder/,
            use: loaders.null()
          },
          {
            test: /mapbox-gl/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
