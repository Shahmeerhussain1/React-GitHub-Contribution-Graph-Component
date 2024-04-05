const path = require('path');

module.exports = {
  entry: './src/ReactGithubLikeGraph.jsx', // Specify the entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js' // Output filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  }
};
