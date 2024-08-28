import { expect } from "chai";

import { getHtmlTagName, isHtmlTagClosed } from "../src/utils.js";

describe("Utils test", () => {
  describe("getHtmlTagName function", () => {
    it("should extract the tag name correctly", () => {
      expect(getHtmlTagName("<div>")).to.equal("div");
      expect(getHtmlTagName('<input type="text"/>')).to.equal("input");
    });

    it("should return null for strings without tags", () => {
      expect(getHtmlTagName("Just some text")).to.be.null;
    });
  });

  describe("isHtmlTagClosed function", () => {
    it("should correctly identify self-closing tags", () => {
      expect(isHtmlTagClosed("<br/>")).to.be.true;
      expect(isHtmlTagClosed('<input type="text"/>')).to.be.true;
    });

    it("should correctly identify non-self-closing tags with closing tags", () => {
      expect(isHtmlTagClosed("<div></div>")).to.be.true;
    });

    it("should return false for tags without a closing tag", () => {
      expect(isHtmlTagClosed("<div>")).to.be.false;
    });
  });
});
