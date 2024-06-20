import { DataSource } from '../data-source';
import { SmartTableFilterConf, SmartTableFilterItem, SmartTablePagingItem, SmartTableSortItem } from '../../interfaces/smart-table.models';
export declare class LocalDataSource<T = any> extends DataSource<T> {
    protected data: T[];
    protected filteredAndSorted: T[];
    protected sortConf: SmartTableSortItem[];
    protected filterConf: SmartTableFilterConf;
    protected pagingConf: SmartTablePagingItem | false;
    constructor(data?: T[]);
    load(data: any): Promise<true>;
    prepend(element: T): Promise<true>;
    appendMany(elements: T[]): Promise<true>;
    append(element: T): Promise<true>;
    add(element: T): Promise<true>;
    remove(element: T): Promise<true>;
    update(element: T, values: T): Promise<true>;
    find(element: T): Promise<T>;
    getElements(): Promise<T[]>;
    getFilteredAndSorted(): Promise<T[]>;
    getAll(): Promise<T[]>;
    reset(silent?: boolean): void;
    empty(): Promise<true>;
    count(): number;
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf: SmartTableSortItem[], doEmit?: boolean): LocalDataSource;
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf: SmartTableFilterItem[], andOperator?: boolean, doEmit?: boolean): LocalDataSource;
    addFilter(fieldConf: SmartTableFilterItem, andOperator?: boolean, doEmit?: boolean): LocalDataSource;
    setPaging(page: number | undefined, perPage: number, doEmit?: boolean): void;
    setPage(page: number, doEmit?: boolean): void;
    getSort(): SmartTableSortItem[];
    getFilter(): SmartTableFilterConf;
    getPaging(): SmartTablePagingItem | false;
    protected prepareData(data: T[]): T[];
    protected sort(data: T[]): T[];
    protected filter(data: T[]): T[];
    protected paginate(data: T[]): T[];
}
