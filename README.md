# stream-to-c-header-char-array
Provides a handy command-line interface for writing char array C-headers as well as a Javascript API.

## Installation

Install locally for using the Javascript API or the CLI in npm scripts:
```
npm install stream-to-c-header-char-array
```

Or globally to run the CLI from anywhere:
```
npm install -g stream-to-c-header-char-array
```

## Usage
```
Usage: stream-to-c-header-char-array [options] <array-identifier>

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

Example of using the CLI:
```
echo ABCDEFG | stream-to-c-header-char-array alphabet > alphabet.h
```

or using the Node.js module:

```Javascript
var transformToCharArray = require('stream-to-c-header-char-array');

fs.createReadStream('script.js').pipe(transformToCharArray('scriptString')).pipe(fs.createWriteStream('scriptString.h'));
```

## Why?
I wanted to embed some javascript into a C program. `xxd` can do this on Linux but I needed a cross-platform solution.

## Copyright
stream-to-c-header-char-array - Provides a handy command-line interface for writing char array C-headers.

Written in 2016 by Jesper Oskarsson jesosk@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright
and related and neighboring rights to this software to the public domain worldwide.
This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
