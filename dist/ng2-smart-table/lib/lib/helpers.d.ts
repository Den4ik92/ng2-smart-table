/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export declare const deepExtend: (...objects: Array<any>) => any;
export declare class Deferred<T> {
    promise: Promise<T>;
    resolve: (value?: T) => void;
    reject: (reason?: string) => void;
    constructor();
}
export declare function getDeepFromObject(object: {} | undefined, name: string, defaultValue?: any): any;
export declare function getPageForRowIndex(index: number, perPage: number): number;
