var fs = require('fs'),
    glob = require('glob'),
    scrawl = require('scrawl'),
    path = require('path');

/**
 * Instant project documentation
 *
 *     var docs = require('scrawlProject')({
 *       dir: __dirname,
 *       match: ['index.js']
 *     });
 *
 * @id index
 * @type Function
 * @param {Object} options - a list of valid options
 * @return {Object}
 */
module.exports = function scrawlProject (options) {

  var addCommentFile = function (file, comment) {
    comment.file = path.relative(opts.dir, file);
    return comment;
  };

  var defaults = {
    dir: '.',
    match: [],
    transform: addCommentFile
  };

  var opts = {};

  var packageJson;

  Object.keys(defaults).forEach(function (k) {
    opts[k] = options[k] || defaults[k];
  });

  if (!Array.isArray(opts.match)) {
    opts.match = [opts.match];
  }

  packageJson = JSON.parse(fs.readFileSync(path.resolve(opts.dir, 'package.json'), 'utf8'));

  packageJson.items = opts.match.reduce(function (memo, pattern) {
    var srcFiles = glob.sync(path.resolve(opts.dir, pattern));
    srcFiles.forEach(function (path) {
      var scrawled = scrawl.parse(fs.readFileSync(path, 'utf8'));
      memo = memo.concat(scrawled.map(opts.transform.bind(this, path)));
    });
    return memo;
  }, []);

  return packageJson;
};

