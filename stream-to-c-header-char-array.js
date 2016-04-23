
// stream-to-c-header-char-array - Provides a handy command-line interface for writing char array C-headers.
// Written in 2016 by Jesper Oskarsson jesosk@gmail.com
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain worldwide.
// This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along with this software.
// If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

var resumer = require('resumer');

var arraySize = 0;
module.exports = function (identifierName) {
    var stream = resumer(function (data) {
        for (var index = 0; index < data.length; index++) {
            this.queue("(char)" + data[index] + ", ");
            arraySize += 1;
        }
    }, function () {
        this.queue("'\\0'};\nlong " + identifierName + "_length = " + arraySize + ";");
    });

    stream.queue('const char ' + identifierName + '[] = {');
    return stream;
};
