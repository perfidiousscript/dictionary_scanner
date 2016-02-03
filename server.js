/**
 * Created by samuelmoss on 2/2/16.
 */
var fs = require("fs");
var script = require("./script");
var solutionObject = {};

var readFile = process.argv[2];

fs.readFile(readFile, "utf8",function (err,data) {

    if (err) {
        return console.log(err);
    }

    solutionObject = script.execute(data);

    fs.writeFile('sequences.txt', "'sequences'\n\n\n" + solutionObject.finalSequenceList.join('\n'), function (err) {
        if (err) {
            throw err;
        }
    })
    ;
    fs.writeFile('words.txt', "'words'\n\n\n" + solutionObject.finalWordList.join('\n'), function (err) {
        if (err) {
            throw err;
        }
    });

});