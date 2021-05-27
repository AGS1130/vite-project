const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({
      preset: "advanced",
      discardComments: { removeAll: true },
    }),
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
};
