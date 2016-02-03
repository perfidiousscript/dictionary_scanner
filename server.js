/**
 * Created by samuelmoss on 2/2/16.
 */
var fs = require("fs");
var script = require("./script");


fs.readFile("./trivial_dictionary.txt", "utf8",function (err,data) {

    if (err) {
        return console.log(err);
    }

    script.format(data);
});