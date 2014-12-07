var data = require("gulp-data");
var optional = require("optional");
var path = require("path");

/**
 * Load JSON data from a companion file and store in file data.
 *
 * @param {Object} file Vinyl File object
 * @return JSON data
 */
function json(file) {
  var filename = path.basename(file.path, path.extname(file.path)) + ".json";
  return optional(path.join(path.dirname(file.path), filename)) || {};
}

module.exports = function() {
  return data(json);
};
