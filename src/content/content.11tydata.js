module.exports = {
  eleventyComputed: {
    tags(data) {
      return baseDirFromFilePathStem(data.page.filePathStem);
    },

    layout(data) {
      if (data.layout) {
        return data.layout;
      }
      const _layout = baseDirFromFilePathStem(data.page.filePathStem).at(-1);
      switch (_layout) {
        case "about":
        case "readings":
        case "writing":
          return _layout;
      }
      return "base";
    },

    permalink(data) {
      return `${data.page.filePathStem}/index.php`;
    }
  },
};

function baseDirFromFilePathStem(filePathStem = "") {
  return filePathStem.split("/", 4).filter(Boolean);
}
