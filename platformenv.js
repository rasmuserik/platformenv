(function() {
  exports.about = {
    title: "platformenv",
    description: "This is a microlibrary with a single function `platformenv.define(global)`, that sets a number of predicates on the global object:`isNodeJs`, `isDevServer`, `isTesting`, and maybe more in the future.\n\nMainly used with solapp apps.\n\nInclude as: `require(\"platformenv\").define global if typeof isNodeJs != \"boolean\"` in coffeescript, to make sure it is optimised away in uglifyjs.\n(The whole reason to have a library that sets properties on the global object is that they can be optimised away, including dead code removal, by uglifyjs when they are defined by the preprocessor).",
    npmjs: true,
    webjs: true
  };

  if (typeof isNodeJs !== "boolean") {
    exports.define = function(global) {
      var _ref;
      global.isNodeJs = (typeof process !== "undefined" && process !== null ? (_ref = process.versions) != null ? _ref.node : void 0 : void 0) ? true : false;
      global.isDevServer = typeof isDevServer !== "undefined" && isDevServer;
      return global.isTesting = isNodeJs ? process.argv.slice(2) : location.hash.slice(1).split("/");
    };
    exports.define(global);
  }

}).call(this);

