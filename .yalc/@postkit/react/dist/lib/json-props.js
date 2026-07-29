export function parseJsonProp(value, propName) {
    if (typeof value !== 'string') {
        return value;
    }
    let parsed;
    try {
        parsed = JSON.parse(value);
    }
    catch {
        throw new TypeError(`Postkit ${propName} must contain valid JSON.`);
    }
    if (!Array.isArray(parsed)) {
        throw new TypeError(`Postkit ${propName} must contain a JSON array.`);
    }
    return parsed;
}
