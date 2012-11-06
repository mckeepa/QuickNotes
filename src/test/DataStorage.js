var DataStorage = require('../server/DataStorage.js');
var assert = require('assert');


describe('DataStorage', function() {
  describe('store', function() {
    it('should store basic data', function() {
        var res = DataStorage.store('GroupMeAAA', 'keyYouBBB', {id:2, description:'Hello There.'});
        var res = DataStorage.store('1023020', 'a1234a', {id:2, description:'Hello There.'});
        var res = DataStorage.store('GroupMeAAA', 'keyYouaa', {id:2, description:'Hello There.'});
      assert.equal(res, 4);
    });

    it('should read data', function() { 

        // SetUp
        var expected = { id: 2, description: 'Hello There.' };
        DataStorage.store('People', 'Pa', expected);

        // Execute
        var res = DataStorage.read('People', 'Pa');

        // Verify
        console.log("Expected:", expected);
        console.log("result:", res);

        assert.equal(res.id, expected.id);
        assert.equal(res.description, expected.description);

        // Clean Up
        //DataStorage.deleteGroup('People');
    });
    
  });
});