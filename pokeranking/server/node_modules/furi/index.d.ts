/**
 * @module furi
 */
/// <reference types="node" />
import url from "url";
/**
 * A `URL` instance or valid URL string.
 */
export declare type UrlLike = url.URL | string;
/**
 * Normalizes the input to a frozen `URL` instance.
 *
 * @param input URL string or instance to normalize.
 */
export declare function asFuri(input: UrlLike): url.URL;
/**
 * Normalizes the input to a writable `URL` instance.
 *
 * @param input URL string or instance to normalize.
 */
export declare function asWritableUrl(input: UrlLike): url.URL;
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
export declare function join(base: UrlLike, components: ReadonlyArray<string>): url.URL;
/**
 * Returns the parent URL.
 *
 * If `input` is the root, it returns itself (saturation).
 * If `input` has a trailing separator, it is first removed.
 *
 * @param input Input URL.
 * @returns Parent URL.
 */
export declare function parent(input: UrlLike): url.URL;
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
export declare function toSysPath(furi: string, windowsLongPath?: boolean): string;
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
export declare function toWindowsShortPath(furi: string): string;
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
export declare function toWindowsLongPath(furi: string): string;
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
export declare function toPosixPath(furi: string): string;
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
export declare function fromSysPath(absPath: string): url.URL;
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
export declare function fromWindowsPath(absPath: string): url.URL;
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
export declare function fromPosixPath(absPath: string): url.URL;
