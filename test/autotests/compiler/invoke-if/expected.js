function create(__markoHelpers) {
  return function render(data, out) {
    if (true) {
      console.log("hello");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
