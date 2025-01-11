/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export const deepExtend = function(...objects: any[]): any {
  if (arguments.length < 1 || typeof arguments[0] !== 'object') {
    return false;
  }

  if (arguments.length < 2) {
    return arguments[0];
  }

  const target = arguments[0];

  // convert arguments to array and cut off target object
  const args = Array.prototype.slice.call(arguments, 1);

  let val, src;

  args.forEach((obj: any) => {
    // skip argument if it is array or isn't object
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      return;
    }

    Object.keys(obj).forEach(function (key) {
      src = target[key]; // source value
      val = obj[key]; // new value

      // recursion prevention
      if (val === target) {
        return;

        /**
         * if new value isn't object then just overwrite by new value
         * instead of extending.
         */
      } else if (typeof val !== 'object' || val === null) {
        target[key] = val;
        return;

        // just clone arrays (and recursive clone objects inside)
      } else if (Array.isArray(val)) {
        target[key] = [...val];
        return;

        // overwrite by new value if source isn't object or array
      } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
        target[key] = deepExtend({}, val);
        return;

        // source value and new value is objects both, extending...
      } else {
        target[key] = deepExtend(src, val);
        return;
      }
    });
  });

  return target;
};

export class Deferred<T> {
  promise: Promise<T>;
  resolve!: (value?: T) => void;
  reject!: (reason?: string) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve as any;
      this.reject = reject;
    });
  }
}

// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object = {}, name: string, defaultValue: any = null) {
  try {
    let level = deepExtend({}, object)
    const keys = name.split('.');
    if (keys.length === 1) {
      return level[keys[0]] ?? defaultValue;
    }
    keys.forEach((k) => {
      if (level && typeof level[k] !== 'undefined') {
        level = level[k];
      }
    });
  } catch {
    return defaultValue
  }
}

export function getPageForRowIndex(index: number, perPage: number): number {
  // we need to add 1 to convert 0-based index to 1-based page number.
  return Math.floor(index / perPage) + 1;
}

export function cloneArrayOfObject<T>(array: T[]): T[] {
  return array.map((obj) => Object.assign({}, obj));
}


export function setLocalStorage(key: string, value: string | object | boolean): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<T = string>(key: string): T | null {
  const valueString = localStorage.getItem(key);
  if (!valueString) {
    return null;
  }
  try {
    return JSON.parse(valueString);
  } catch {
    return null;
  }
}
