// Write your tests here!
const expect = require('chai').expect;
const polybiusModule = require('../src/polybius');
// encoding a message

// should encode a message by translating each letter to number pairs
describe("polybiusModule", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        let expetced = "44";
        let actual = polybiusModule.polybius("t");
        expect(actual).to.eql(expetced)
    });

    // should translate both 'i' and 'j' to 42
    it("should translate both 'i' and 'j' to 42", () => {
        let expetced = "42";
        let actual = polybiusModule.polybius("i");
        expect(actual).to.eql(expetced)
    });

    // should leave spaces as is
    it("should leave spaces as is", () => {
        let expetced = "44 21";
        let actual = polybiusModule.polybius("t b");
        expect(actual).to.eql(expetced)
    });

    // decoding a message

    // should decode a message by translating each pair of numbers into a letter
    it("should decode a message by translating each pair of numbers into a letter", () => {
        let expetced = "tb";
        let actual = polybiusModule.polybius("4421", false);
        expect(actual).to.equal(expetced)
    });

    // should translate 42 to both 'i' and 'j'
    it("should translate 42 to both 'i' and 'j'", () => {
        let expetced = "ij";
        let actual = polybiusModule.polybius("42", false);
        expect(actual).to.equal(expetced)
    });

    // should leave spaces as is
    it("should leave spaces as is", () => {
        let expetced = "t b";
        let actual = polybiusModule.polybius("44 21", false);
        expect(actual).to.equal(expetced)
    });

    // should return false if the length of all numbers is odd
    it("should return false if the length of all numbers is odd", () => {
        let actual = polybiusModule.polybius("12345", false);
        expect(actual).to.be.false;
    });

})