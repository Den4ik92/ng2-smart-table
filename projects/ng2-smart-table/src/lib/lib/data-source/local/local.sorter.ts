import { SmartTableCompareFunction } from '../../interfaces/smart-table.models';

export function compareValues(direction: number, a: any, b: any) {
  if (a < b) {
    return -1 * direction;
  }
  if (a > b) {
    return direction;
  }
  return 0;
}

export function localSort<T extends Record<string, any>>(
  data: T[],
  field: string,
  direction: string,
  customCompare?: SmartTableCompareFunction,
): T[] {
  const dir: number = direction === 'asc' ? 1 : -1;
  const compare = customCompare ? customCompare : compareValues;

  return data.sort((a, b) => {
    try {
      return compare(dir, a[field], b[field]);
    } catch {
      return 0;
    }
  });
}
