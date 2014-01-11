exports.about =
  title: "platformenv"
  description: """
    This is a microlibrary with a single function `platformenv.define(global)`, that sets a number of predicates on the global object:`isNodeJs`, `isDevServer`, `isTesting`, and maybe more in the future.

    Mainly used with solapp apps.

    Include as: `require("platformenv").define global if typeof isNodeJs != "boolean"` in coffeescript, to make sure it is optimised away in uglifyjs.
    (The whole reason to have a library that sets properties on the global object is that they can be optimised away, including dead code removal, by uglifyjs when they are defined by the preprocessor).
    """
  npmjs: true
  webjs: true

#{{{1 Main
if typeof isNodeJs != "boolean"
  exports.define = (global) ->
    global.isNodeJs = if process?.versions?.node then true else false
    global.isDevServer = typeof isDevServer != "undefined" && isDevServer
    global.isTesting = if isNodeJs then process.argv.slice(2) else location.hash.slice(1).split "/"
  exports.define global
