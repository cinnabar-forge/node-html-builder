import { getHtmlTagName, isHtmlTagClosed } from "./utils.js";

class CinnabarHtmlBuilder {
  indentation: number;
  lines: string[] = [];
  tree: string[] = [];

  constructor(initialIndentation: number) {
    this.indentation = initialIndentation || 0;
  }

  add(markup: string) {
    this.lines.push("  ".repeat(this.indentation) + markup);
    if (!isHtmlTagClosed(markup)) {
      const tagName = getHtmlTagName(markup);
      if (!tagName) {
        throw new Error(`Invalid HTML tag: ${markup}`);
      }
      this.indentation++;
      this.tree.push(tagName);
    }

    return this;
  }

  build() {
    if (this.tree.length > 0) {
      throw new Error(
        `HTML is incorrect. Unmatched tag(s): ${this.tree.join(", ")}.`,
      );
    }
    return this.lines.join("\n");
  }

  close() {
    this.indentation--;
    const parentTag = this.tree.pop();
    this.lines.push("  ".repeat(this.indentation) + `</${parentTag}>`);
    return this;
  }

  raw(markup: string) {
    this.lines.push("  ".repeat(this.indentation) + markup);
  }
}

export { CinnabarHtmlBuilder };
