/**
 * Created by samuelmoss on 2/1/16.
 */
'use strict';

var formattedDictionary = [];
var wordObject = {};
var solutionObject = {};
var finalSequenceList = [];
var finalWordList = [];

//This function formats the .txt into an array
// wherein each element is one word.
var format = function(dictionary){
    formattedDictionary = dictionary.split("\n");
    console.log("here is formattedDictionary",formattedDictionary)
};

//This function populates the wordObject
// with an object keyed to every word
// greater than four
// letters in the dictionary.
// Each object in the wordObject
// contains an array of the letters of the word
// and an empty array to hold all the sequences of gour letters generated from
// that word.
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
//assembles the various four letter sequences
// that can be made from that word.
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


module.exports.format = format;