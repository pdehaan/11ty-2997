/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  ["about", "readings", "writing"].forEach(dir => {
    eleventyConfig.addLayoutAlias(dir, `layouts/${dir}.njk`);
    eleventyConfig.addCollection(dir, collectionApi => collectionApi.getFilteredByTags("content", dir));
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
