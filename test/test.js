var assert = require('chai').assert;
var script = require('../script.js');

describe('dictionary scanner',function(){
    it('should always pass',function(){
       assert.equal(1+1,2);
    });
    it('should return an alphabetical array of sequences',function(){
        assert.equal(script('oooo'),{finalSeqeunceList:['oooo'],finalWordList:['oooo']});
    });
    it('should return an alphabetical array of sequences',function(){
        assert.equal(script("arrows\ncarrots\ngive\nme"),{ finalSequenceList: [ 'carr', 'give', 'rots', 'rows', 'rrot', 'rrow' ],
            finalWordList: [ 'carrots', 'give', 'carrots', 'arrows', 'carrots', 'arrows' ] });
    });
});