/** @type {import('tailwindcss').Config} */
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

