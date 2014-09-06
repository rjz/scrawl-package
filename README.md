scrawl-package
===============================================================================

Parse package info and inline documentation into JSON using [scrawl][scrawl].

Usage
-------------------------------------------------------------------------------

    $ npm install --save-dev scrawl-package

Then, point it at files in the current directory:

    var info = require('scrawlProject')({
      match: [
        'index.js',
        'src/**/*.js'
      ]
    });

Options:

  * `match` - a string or array of strings with a glob pattern of files to be
      parsed

  * `dir` - the package directory (optional; defaults to current directory)

  * `transform` - a transformation function to apply to each scrawl comment
      (optional)

Testing
-------------------------------------------------------------------------------

    $ npm test

License
-------------------------------------------------------------------------------

MIT

[scrawl]: https://github.com/caolan/scrawl

