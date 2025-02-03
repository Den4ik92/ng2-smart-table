import { SmartTableFilterFunction, SmartTableFilterItem } from "../../interfaces/smart-table.models";

function filterValues(value: any, search: string): boolean {
  return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}

export function isElementSatisfied<T extends Record<string, unknown>>(element: T, filters: SmartTableFilterItem[]): boolean {
  return filters.every((filter: SmartTableFilterItem) => {
    if (!filter.search?.length) {
      return true;
    }
    const filterFunction: SmartTableFilterFunction = filter.filter || filterValues;
    try {
      const value = element[filter.field];
      return filterFunction(value, filter.search);
    } catch {
      return false
    }
  });
}
