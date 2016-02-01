/**
 * Created by samuelmoss on 2/1/16.
 */
var trivialDictionary = ["arrows", "carrots", "give", "me"];
var wordObject = {};
var solutionObject = {};

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
    console.log("here is the word object: ",wordObject);
    console.log("here is the solution object: ",solutionObject);
};

var assembleSequences = function(currentWordObject){
    for(var j = 3; j < currentWordObject.letters.length; j++){
        var letterList = currentWordObject.letters;
        var currentSequence = letterList[j - 3] + letterList[j - 2] + letterList[j - 1] + letterList[j];
        currentWordObject.sequences.push(currentSequence);
        checkForDuplicate(currentSequence, currentWordObject);
    }
};

var checkForDuplicate = function(newSequence, referenceWord){
   for(oldSequence in solutionObject){
       if(oldSequence.sequence === newSequence) {
           delete solutionObject[oldSequence];
           return;
       }
   }
    solutionObject[newSequence] = {};
    solutionObject[newSequence].sequence = newSequence;
    solutionObject[newSequence].word = referenceWord.word;
};

var printSolution

iterateThroughWords(trivialDictionary);
