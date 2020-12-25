module.exports = function(eleventyConfig) {
    const dirInput = "src";

    // copy unprocessed, otherwise excluded items to output
    eleventyConfig.addPassthroughCopy(`${dirInput}/CNAME`);

    return {        
        dir: {
          input: dirInput,
          layouts: "_layouts",
          output: "docs"
        }
    };
};
