import { SmartTableCompareFunction } from "../../interfaces/smart-table.models";

export function compareValues(direction: number, a: any, b: any) {
  if (a < b) {
    return -1 * direction;
  }
  if (a > b) {
    return direction;
  }
  return 0;
}

export class LocalSorter {
  static sort<T extends Record<string, any>>(
    data: T[],
    field: string,
    direction: string,
    customCompare?: SmartTableCompareFunction
  ): T[] {
    const dir: number = direction === "asc" ? 1 : -1;
    const compare = customCompare ? customCompare : compareValues;

    return data.sort((a, b) => {
      return compare.call(null, dir, a[field], b[field]);
    });
  }
}
