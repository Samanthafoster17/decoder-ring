// Write your tests here!
const expect = require('chai').expect;
const substitutionModule = require('../src/substitution');
// error handling

// should return false if the substitution alphabet is missing
describe('substitionModule', () => {
    it('should return false if the substitution alphabet is missing', () => {
        let actual = substitutionModule.substitution("input");
        expect(actual).to.be.false;
    });
    

// should return false if the substitution alphabet is not exactly 26 characters
    it('should return false if the substitution alphabet is not exactly 26 characters', () => {
        let actual = substitutionModule.substitution("input", "abcd");
        expect(actual).to.be.false;
    });
    
// should return false if the substitution alphabet does not contain unique characters
it('should return false if the substitution alphabet does not contain unique characters', () => {
    let actual = substitutionModule.substitution("input", "aaaa");
    expect(actual).to.be.false;
});
// encoding a message

// should encode a message by using the given substitution alphabet
it('should encode a message by using the given substitution alphabet', () => {
    let expected = 'jrulscpw' ;
    let actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.be.eql(expected);
});
// should work with any kind of key with unique characters
it('should work with any kind of key with unique characters', () => {
    let expected = 'y&ii$r&' ;
    let actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.be.eql(expected);
});

// should preserve spaces
it('should preserve spaces', () => {
    let expected = 'y &ii$r&' ;
    let actual = substitutionModule.substitution("m essage", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.be.eql(expected);
});

// decoding a message

// should decode a message by using the given substitution alphabet
it('should decode a message by using the given substitution alphabet', () => {
    let expected = "thinkful" ;
    let actual = substitutionModule.substitution("jrulscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.be.eql(expected);
});

// should work with any kind of key with unique characters
it('should work with any kind of key with unique characters', () => {
    let expected = "message" ;
    let actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.be.eql(expected);
});

// should preserve spaces
it('should preserve spaces', () => {
    let expected = "t hink ful" ;
    let actual = substitutionModule.substitution("j ruls cpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.be.eql(expected);
});
});