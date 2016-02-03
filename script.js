/**
 * Created by samuelmoss on 2/1/16.
 */
'use strict';

var preFormattedDictionary = "";
var formattedDictionary = [];
var wordObject = {};
var solutionObject = {};
var finalSequenceList = [];
var finalWordList = [];

//This function formats the .txt into an array.
var format = function(dictionary){
    formattedDictionary = dictionary.split("\n");
    console.log("here is formatted dictionary: ", formattedDictionary);
};
console.log("preFormattedDictionary: ", preFormattedDictionary);
format(preFormattedDictionary);
//This function populates the wordObject
// with an object for every word
// greater than four letters
// in the dictionary.
var iterateThroughWords = function(wordArray){
    for(var i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > 3){
            wordObject[wordArray[i]] = {};
            var currentWordObject = wordObject[wordArray[i]];
            currentWordObject.letters = wordArray[i].split("");
            currentWordObject.sequences = [];
            currentWordObject.word = wordArray[i];
            assembleSequences(currentWordObject);
        }
    }
};

//This function runs through each word and
//assembles the various four letter sequences.
var assembleSequences = function(currentWordObject){
    for(var j = 3; j < currentWordObject.letters.length; j++){
        var letterList = currentWordObject.letters;
        var currentSequence = letterList[j - 3] + letterList[j - 2] + letterList[j - 1] + letterList[j];
        currentWordObject.sequences.push(currentSequence);
        checkForDuplicate(currentSequence, currentWordObject);
    }
};

//This function runs once for each sequence.
//It checks each new sequence against those that already exist.
//If the sequence exists it removes it from the object, otherwise it
//adds the sequence in the object.
var checkForDuplicate = function(newSequence, referenceWord){
    var isDuplicate = false;
    for(var oldSequence in solutionObject){
        if(newSequence === oldSequence) {
            isDuplicate = true;
            break;
        }
    }
    if(isDuplicate){
        delete solutionObject[newSequence];
    } else {
        solutionObject[newSequence] = {};
        solutionObject[newSequence].sequence = newSequence;
        solutionObject[newSequence].word = referenceWord.word;
    }
};

var printSolution = function(solutionObject){
    for(var sequenceObject in solutionObject){
        finalSequenceList.push(solutionObject[sequenceObject].sequence);
        finalWordList.push(solutionObject[sequenceObject].word);
    }
};

iterateThroughWords(formattedDictionary);
printSolution(solutionObject);
console.log("here is finalSequenceList:", finalSequenceList);
console.log("here is finalWordList:", finalWordList);

