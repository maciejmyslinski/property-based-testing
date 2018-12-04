module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },

      {
        test: /\.example.js$/,
        use: [{ loader: 'raw-loader' }],
      },
    ],
  },
};
