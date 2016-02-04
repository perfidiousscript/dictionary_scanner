var assert = require('chai').assert;
var script = require('../script.js');

describe('dictionary scanner',function(){
    it('mocha works',function(){
       assert.equal(1+1,2);
    });
    it('should work on a single sequence',function(){
        assert.deepEqual(script.execute('oooo'),{finalSequenceList:['oooo'],finalWordList:['oooo']});
    });
    it('should work on the trivial dictionary',function(){
        assert.deepEqual(script.execute("arrows\ncarrots\ngive\nme"),{ finalSequenceList: [ 'carr', 'give', 'rots', 'rows', 'rrot', 'rrow' ],
            finalWordList: [ 'carrots', 'give', 'carrots', 'arrows', 'carrots', 'arrows' ] });
    });
});