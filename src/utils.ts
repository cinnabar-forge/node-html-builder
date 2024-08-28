/**
 *
 * @param htmlString
 */
export function getHtmlTagName(htmlString: string) {
  const tagMatch = htmlString.match(new RegExp("<\\s*([^>\\s\\/]+)[^>]*>"));
  return tagMatch ? tagMatch[1] : null;
}

/**
 *
 * @param htmlString
 */
export function isHtmlTagClosed(htmlString: string) {
  if (htmlString.trim().endsWith("/>")) {
    return true;
  }

  const tagName = getHtmlTagName(htmlString);
  if (!tagName) {
    return false;
  }

  // eslint-disable-next-line security/detect-non-literal-regexp
  const closeTagRegex = new RegExp(`<\\/\\s*${tagName}\\s*>`, "i");
  return closeTagRegex.test(htmlString);
}
