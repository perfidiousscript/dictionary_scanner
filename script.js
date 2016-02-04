/**
 * Created by samuelmoss on 2/1/16.
 */
'use strict';

var formattedDictionary = [];
var wordObject = {};
var solutionObject = {};
var finalSequenceList = [];
var finalWordList = [];
var returnedObject = {};

//This function formats the .txt into an array
// where each element is one word from the dcitionary.
var format = function(dictionary){
    formattedDictionary = dictionary.split("\n");
};

// This function populates the wordObject
// with an object keyed to every word
// greater than four letters in the dictionary.
// Each object in the wordObject contains an array of the letters of the word
// and an empty array to hold all the sequences of four letters generated from that word.
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

// This function runs through each word and
// assembles the various four letter sequences
// that can be made from that word.
var assembleSequences = function(currentWordObject){
    for(var j = 3; j < currentWordObject.letters.length; j++){
        var position = function(n){
            return currentWordObject.letters[j - n];
        };
        var currentSequence = position(3) + position(2) + position(1) + position(0);
        currentWordObject.sequences.push(currentSequence);
        checkForDuplicate(currentSequence, currentWordObject);
    }
};

//This function runs once for each sequence.
//It checks the new sequence against those that already exist.
//If the sequence exists it gives the existing sequence an 'isDuplicate' key of true,
//otherwise it adds the sequence to the object.
var checkForDuplicate = function(newSequence, referenceWord){
    if(solutionObject[newSequence.toLowerCase()]){
        solutionObject[newSequence.toLowerCase()].isDuplicate = true;
    } else {
        solutionObject[newSequence] = {};
        solutionObject[newSequence].sequence = newSequence;
        solutionObject[newSequence].word = referenceWord.word;
    }
};

// This function checks whether a
// sequence is a duplicate. If it
// is not the function holds that sequence, sorts the
// sequences alphabetically then pushes the final
// arrays of sequences and words to an object which will
// be exported to the main server.
var printSolution = function(solutionObject){
    var sortableArray = [];
    for(var sequenceObject in solutionObject){
        if(!solutionObject[sequenceObject].isDuplicate){
          sortableArray.push([solutionObject[sequenceObject].sequence,solutionObject[sequenceObject].word])
        }
    }
    sortableArray = sortableArray.sort(
        function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;
    });
    finalSequenceList = sortableArray.map(function(array){return array[0]});
    finalWordList = sortableArray.map(function(array){return array[1]});
    returnedObject.finalSequenceList = finalSequenceList;
    returnedObject.finalWordList = finalWordList;
};

//This function executes all the other functions and
//is exported to the main server.
var execute = function(data){
     formattedDictionary = [];
     wordObject = {};
     solutionObject = {};
     finalSequenceList = [];
     finalWordList = [];
     returnedObject = {};

    format(data);
    iterateThroughWords(formattedDictionary);
    printSolution(solutionObject);
    console.log(returnedObject);
    return returnedObject;
};


module.exports.execute = execute;