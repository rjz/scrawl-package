var assert = require('assert'),
    path = require('path');

var scrawlProject = require('../index');

var testProjectDir = path.resolve(__dirname, 'example');

describe('scrawlProject', function () {
  it('gets package data', function () {
    var result = scrawlProject({
      dir: testProjectDir
    });
    expect(result.name).toEqual('foo');
  });

  it('gets scrawl items', function () {
    var result = scrawlProject({
      dir: testProjectDir,
      match: ['index.js']
    });
    expect(result.items.length).toEqual(1);
  });
});

