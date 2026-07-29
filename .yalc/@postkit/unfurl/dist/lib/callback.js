/**
 * Adapts an application callback to Postkit's resolver interface.
 *
 * The callback remains responsible for returning the normalized
 * `ResolvedLinkPreview` contract.
 */
export function createCallbackResolver(id, resolve) {
    if (!id) {
        throw new TypeError('A callback link resolver requires an id.');
    }
    return Object.freeze({ id, resolve });
}
