/**
 * @module furi
 */

import assert from "assert";
import isWindows from "is-windows";
import url from "url";

/**
 * A `URL` instance or valid URL string.
 */
export type UrlLike = url.URL | string;

/**
 * Normalizes the input to a frozen `URL` instance.
 *
 * @param input URL string or instance to normalize.
 */
export function asFuri(input: UrlLike): url.URL {
  if (typeof input === "string") {
    const writable: url.URL = new url.URL(input);
    freezeUrl(writable);
    return writable;
  } else if (!Object.isFrozen(input)) {
    const writable: url.URL = new url.URL(input.toString());
    freezeUrl(writable);
    return writable;
  } else {
    return input;
  }
}

/**
 * Normalizes the input to a writable `URL` instance.
 *
 * @param input URL string or instance to normalize.
 */
export function asWritableUrl(input: UrlLike): url.URL {
  return new url.URL(typeof input === "string" ? input : input.toString());
}

/**
 * Appends the provided components to the pathname of `base`.
 *
 * It does not mutate the inputs.
 * If component list is non-empty, the `hash` and `search` are set to the
 * empty string.
 *
 * @param base Base URL.
 * @param components Path components to append.
 * @returns Joined URL.
 */
export function join(base: UrlLike, components: ReadonlyArray<string>): url.URL {
  if (components.length === 0) {
    return asFuri(base);
  }
  const writable: url.URL = asWritableUrl(base);
  const oldPathname: string = writable.pathname;
  const tail: string = components
    .map(encodeURIComponent)
    .join("/");
  writable.hash = "";
  writable.search = "";
  const separator: string = oldPathname.endsWith("/") ? "" : "/";
  writable.pathname = `${oldPathname}${separator}${tail}`;
  freezeUrl(writable);
  return writable;
}

/**
 * Returns the parent URL.
 *
 * If `input` is the root, it returns itself (saturation).
 * If `input` has a trailing separator, it is first removed.
 *
 * @param input Input URL.
 * @returns Parent URL.
 */
export function parent(input: UrlLike): url.URL {
  const writable: url.URL = asWritableUrl(input);
  const oldPathname: string = writable.pathname;
  const components: string[] = oldPathname.split("/");
  if (components[components.length - 1] === "") {
    // Remove trailing separator
    components.pop();
  }
  components.pop();
  writable.pathname = components.join("/");
  freezeUrl(writable);
  return writable;
}

/**
 * Converts a File URI to a system-dependent path.
 *
 * Use `toPosixPath`, `toWindowsShortPath` or `toWindowsLongPath` if you
 * want system-independent results.
 *
 * Example:
 * ```js
 * // On a Windows system:
 * toSysPath("file:///C:/dir/foo");
 * // -> "C:\\dir\\foo";
 * toSysPath("file:///C:/dir/foo", true);
 * // -> "\\\\?\\C:\\dir\\foo";
 *
 * // On a Posix system:
 * toSysPath("file:///dir/foo");
 * // -> "/dir/foo";
 * ```
 *
 * @param furi File URI to convert.
 * @param windowsLongPath Use long paths on Windows. (default: `false`)
 * @return System-dependent path.
 */
export function toSysPath(furi: string, windowsLongPath: boolean = false): string {
  if (isWindows()) {
    return windowsLongPath ? toWindowsLongPath(furi) : toWindowsShortPath(furi);
  } else {
    return toPosixPath(furi);
  }
}

/**
 * Converts a File URI to a Windows short path.
 *
 * The result is either a short device path or a short UNC server path.
 *
 * Example:
 * ```js
 * toSysPath("file:///C:/dir/foo");
 * // -> "C:\\dir\\foo";
 * toSysPath("file://server/Users/foo");
 * // -> "\\\\server\\Users\\foo";
 * ```
 *
 * @param furi File URI to convert.
 * @return Windows short path.
 */
export function toWindowsShortPath(furi: string): string {
  const urlObj: url.URL = new url.URL(furi);
  if (urlObj.host === "") {
    // Local drive path
    const pathname: string = urlObj.pathname.substring(1);
    const forward: string = pathname.split("/").map(decodeURIComponent).join("/");
    return toBackwardSlashes(forward);
  } else {
    // Server path
    const pathname: string = new url.URL(furi).pathname;
    const forward: string = pathname.split("/").map(decodeURIComponent).join("/");
    const backward: string = toBackwardSlashes(forward);
    return `\\\\${urlObj.host}${backward}`;
  }
}

/**
 * Converts a File URI to a Windows long path.
 *
 * The result is either a long device path or a long UNC server path.
 *
 * Example:
 * ```js
 * toWindowsPath("file:///C:/dir/foo");
 * // -> "\\\\?\\C:\\dir\\foo";
 * toWindowsPath("file://server/Users/foo");
 * // -> "\\\\?\\unc\\server\\Users\\foo";
 * ```
 *
 * @param furi File URI to convert.
 * @return Windows long path.
 */
export function toWindowsLongPath(furi: string): string {
  const urlObj: url.URL = new url.URL(furi);
  if (urlObj.host === "") {
    // Local drive path
    const pathname: string = urlObj.pathname.substring(1);
    const forward: string = pathname.split("/").map(decodeURIComponent).join("/");
    const backward: string = toBackwardSlashes(forward);
    return `\\\\?\\${backward}`;
  } else {
    // Server path
    const pathname: string = new url.URL(furi).pathname;
    const forward: string = pathname.split("/").map(decodeURIComponent).join("/");
    const backward: string = toBackwardSlashes(forward);
    return `\\\\?\\unc\\${urlObj.host}${backward}`;
  }
}

/**
 * Converts a File URI to a Posix path.
 *
 * Requires the host to be either an empty string or `"localhost"`.
 *
 * Example:
 * ```js
 * toPosixPath("file:///dir/foo");
 * // -> "/dir/foo";
 * ```
 *
 * @param furi File URI to convert.
 * @return Posix path.
 */
export function toPosixPath(furi: string): string {
  const urlObj: url.URL = new url.URL(furi);
  if (urlObj.host !== "" && urlObj.host !== "localhost") {
    assert.fail(`Expected \`host\` to be "" or "localhost": ${furi}`);
  }
  const pathname: string = urlObj.pathname;
  return pathname.split("/").map(decodeURIComponent).join("/");
}

/**
 * Converts an absolute system-dependent path to a frozen URL object.
 *
 * Use `fromPosixPath` or `fromWindowsPath` if you want system-independent
 * results.
 *
 * Example:
 * ```js
 * // On a Windows system:
 * fromSysPath("C:\\dir\\foo");
 * // -> new URL("file:///C:/dir/foo");
 *
 * // On a Posix system:
 * fromSysPath("/dir/foo");
 * // -> new URL("file:///dir/foo");
 * ```
 *
 * @param absPath Absolute system-dependent path to convert
 * @return Frozen `file://` URL object.
 */
export function fromSysPath(absPath: string): url.URL {
  return isWindows() ? fromWindowsPath(absPath) : fromPosixPath(absPath);
}

const WINDOWS_PREFIX_REGEX: RegExp = /^[\\/]{2,}([^\\/]+)(?:$|[\\/]+)/;
const WINDOWS_UNC_REGEX: RegExp = /^unc(?:$|[\\/]+)([^\\/]+)(?:$|[\\/]+)/i;

/**
 * Converts an absolute Windows path to a frozen URL object.
 *
 * Example:
 * ```js
 * fromWindowsPath("C:\\dir\\foo");
 * // -> new URL(file:///C:/dir/foo");
 * fromWindowsPath("\\\\?\\unc\\server\\Users\\foo");
 * // -> new URL("file://server/Users/foo");
 * ```
 *
 * @param absPath Absolute Windows path to convert
 * @return Frozen `file://` URL object.
 */
export function fromWindowsPath(absPath: string): url.URL {
  const prefixMatch: RegExpExecArray | null = WINDOWS_PREFIX_REGEX.exec(absPath);
  if (prefixMatch === null) {
    // Short device path
    return formatFileUrl(`/${toForwardSlashes(absPath)}`);
  }
  const prefix: string = prefixMatch[1];
  const tail: string = absPath.substring(prefixMatch[0].length);
  if (prefix !== "?") {
    // Short server path
    const result: url.URL = new url.URL("file:///");
    result.host = prefix;
    result.pathname = encodeURI(`/${toForwardSlashes(tail)}`);
    freezeUrl(result);
    return result;
  }
  // Long path
  const uncMatch: RegExpExecArray | null = WINDOWS_UNC_REGEX.exec(tail);
  if (uncMatch === null) {
    // Long device path
    return formatFileUrl(`/${toForwardSlashes(tail)}`);
  } else {
    // Long server path
    const host: string = uncMatch[1];
    const serverPath: string = tail.substring(uncMatch[0].length);
    const result: url.URL = new url.URL("file:///");
    result.host = host;
    result.pathname = encodeURI(`/${toForwardSlashes(serverPath)}`);
    freezeUrl(result);
    return result;
  }
}

/**
 * Converts an absolute Posix path to a frozen URL object.
 *
 * Example:
 * ```js
 * fromPosixPath("/dir/foo");
 * // -> new URL(file:///dir/foo");
 * ```
 *
 * @param absPath Absolute Posix path to convert
 * @return Frozen `file://` URL object.
 */
export function fromPosixPath(absPath: string): url.URL {
  return formatFileUrl(absPath);
}

/**
 * Replaces all the backward slashes by forward slashes.
 *
 * @param str Input string.
 * @internal
 */
function toForwardSlashes(str: string): string {
  return str.replace(/\\/g, "/");
}

/**
 * Replaces all the forward slashes by backward slashes.
 *
 * @param str Input string.
 * @internal
 */
function toBackwardSlashes(str: string): string {
  return str.replace(/\//g, "\\");
}

/**
 * Creates a frozen `file://` URL using the supplied `pathname`.
 *
 * @param pathname Pathname for the URL object.
 * @return Frozen `file://` URL object.
 * @internal
 */
function formatFileUrl(pathname: string): url.URL {
  const result: url.URL = new url.URL("file:///");
  result.pathname = encodeURI(pathname);
  freezeUrl(result);
  return result;
}

/**
 * Freezes a URL object.
 *
 * @param writableUrl URL object to freeze.
 * @internal
 */
function freezeUrl(writableUrl: url.URL): void {
  Object.freeze(writableUrl.searchParams);
  Object.freeze(writableUrl);
}
