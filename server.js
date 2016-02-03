/**
 * Created by samuelmoss on 2/2/16.
 */
var fs = require("fs");
var script = require("./script");
var solutionObject = {};

fs.readFile("./trivial_dictionary.txt", "utf8",function (err,data) {

    if (err) {
        return console.log(err);
    }

    solutionObject = script.execute(data);

    fs.writeFile('sequences.txt', solutionObject.finalSequenceList.join('/n'), function (err) {
        if (err) {
            throw err;
        }
    });

    fs.writeFile('words.txt', solutionObject.finalWordList.join('/n'), function (err) {
        if (err) {
            throw err;
        }
    });

});


