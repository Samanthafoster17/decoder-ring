// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");


// error handling

// should return false if the shift amount is 0
describe("ceaserModule", () => {
    it("should return false if the shift amount is 0", () => {
        let actual = caesarModule.caesar("input", 0);
        expect(actual).to.be.false;
    });

    // should return false if the shift amount is above 25
    it("should return false if the shift amount is above 25", () => {
        let actual = caesarModule.caesar("input", 26);
        expect(actual).to.be.false;
    });

    // should return false if the shift amount is less than -25
    it("should return false if the shift amount is less than -25", () => {
        let actual = caesarModule.caesar("input", -26);
        expect(actual).to.be.false;
    });

    //  encoding message

    // should encode a message by shifting the letters
    it("should encode a message by shifting the letters", () => {
        let expected = "thinkful";
        let actual = caesarModule.caesar("Sghmjetk", 1);
        expect(actual).to.eql(expected)
    })

    // should leaves spaces and other symbols as is
    it("should leaves spaces and other symbols as is", () => {
        let expected = "t hinkful.";
        let actual = caesarModule.caesar("S ghmjetk.", 1);
        expect(actual).to.eql(expected)
    })

    // should ignore capital letters
    it("should ignore capital letters", () => {
        let expected = "t hinkful";
        let actual = caesarModule.caesar("S Ghmjetk", 1);
        expect(actual).to.eql(expected)
    })

    // should appropriately handle letters at the end of the alphabet
    it("should appropriately handle letters at the end of the alphabet", () => {
        let expected = "t hinkfulaa";
        let actual = caesarModule.caesar("S Ghmjetkzz", 1);
        expect(actual).to.eql(expected)
    })

    // should allow for a negative shift that will shift to the left
    it("should allow for a negative shift that will shift to the left", () => {
        let expected = "t hinkfulaa";
        let actual = caesarModule.caesar("U Ijolgvmbb", -1);
        expect(actual).to.eql(expected)
    })

    // decoding message

    // should decode a message by shifting the letters
    it("should decode a message by shifting the letters", () => {
        let expected = "uijolgvm";
        let actual = caesarModule.caesar("Thinkful", 1);
        expect(actual).to.eql(expected)
    })

    // should leaves spaces and other symbols as is
    it("should leaves spaces and other symbols as is", () => {
        let expected = "u ijolgvm.";
        let actual = caesarModule.caesar("T hinkful.", 1);
        expect(actual).to.eql(expected)
    })

    // should ignore capital letters
    it("should ignore capital letters", () => {
        let expected = "u ijolgvm";
        let actual = caesarModule.caesar("T Hinkful", 1);
        expect(actual).to.eql(expected)
    })

    // should appropriately handle letters at the end of the alphabet
    it("should appropriately handle letters at the end of the alphabet", () => {
        let expected = "u ijolgvmbb";
        let actual = caesarModule.caesar("T Hinkfulaa", 1);
        expect(actual).to.eql(expected)
    })

    // should allow for a negative shift that will shift to the left
    it("should allow for a negative shift that will shift to the left", () => {
        let expected = "s ghmjetkzz";
        let actual = caesarModule.caesar("T Hinkfulaa", -1);
        expect(actual).to.eql(expected)
    })
})