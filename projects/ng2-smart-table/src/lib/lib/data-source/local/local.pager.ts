export function paginateList(data: any[], page: number, perPage: number): any[] {
  return [...data].slice(perPage * (page - 1), perPage * page);
}
