var fs = require('fs');
// var request = require('request');

// SRTM hgt file
// @TODO make this a request
var hgtPath = 'N45W122.hgt';

var heights = [];
var currentRow = 0;
heights[currentRow] = [];

fs.readFile(hgtPath, function(err, data) {
    if (err) console.warn(err);
    var totalRows = Math.sqrt(data.length / 2);
    for (var i = 0; i < data.length; i++) {
        if (i % 2 === 0)
            heights[currentRow].push(data.readInt16BE(i));
        if (i > 0 && i % totalRows === 0) {
            currentRow++;
            heights[currentRow] = [];
        }
        if (i === data.length - 1) {
            fs.writeFile("heights.json", JSON.stringify(heights), function(err) {
                if (err) console.warn(err);
            });
        }
    }
});
