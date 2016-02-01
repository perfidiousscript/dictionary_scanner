/**
 * Created by samuelmoss on 2/1/16.
 */
var trivialDictionary = ["arrows", "carrots", "give", "me"];
var wordObject = {};


var populateObject = function(wordArray){
    for(var i = 0; i < wordArray.length; i++){
        wordObject[wordArray[i]] = {}
    }
    console.log("here is the word object: ",wordObject);
};

populateObject(trivialDictionary);