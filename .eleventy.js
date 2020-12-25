module.exports = function(eleventyConfig) {
    // copy unprocessed, otherwise excluded items to output
    eleventyConfig.addPassthroughCopy("CNAME");

    return {        
        dir: {
          input: "src",
          layouts: "_layouts",
          output: "docs"
        }
    };
};
