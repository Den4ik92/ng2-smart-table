import { BaseDataType, SmartTableFilterFunction, SmartTableFilterItem } from '../../interfaces/smart-table.models';

function exactMatch(value: any, search: string): boolean {
  return value.toString().toLowerCase() === search.toString().toLowerCase();
}

function includeMatch(value: any, search: string): boolean {
  return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}

export function isElementSatisfied<T extends BaseDataType>(element: T, filters: SmartTableFilterItem[]) {
  return filters.every((filter: SmartTableFilterItem) => {
    const search = `${filter.search}`;
    if (!search?.length) {
      return true;
    }
    const filterFunction: SmartTableFilterFunction =
      filter.filter || (filter.type === 'list' ? exactMatch : includeMatch);
    try {
      const value = element[filter.field];
      return filterFunction(value, search);
    } catch {
      return false;
    }
  });
}
