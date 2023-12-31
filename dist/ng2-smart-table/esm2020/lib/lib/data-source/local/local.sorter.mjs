export function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
export class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLnNvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsYUFBYSxDQUFDLFNBQWMsRUFBRSxDQUFNLEVBQUUsQ0FBTTtJQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDVCxPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUN2QjtJQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNULE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsTUFBTSxPQUFPLFdBQVc7SUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFnQixFQUFFLEtBQWEsRUFBRSxTQUFpQixFQUFFLGFBQXdCO1FBRXRGLE1BQU0sR0FBRyxHQUFXLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFhLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFFeEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmFsdWVzKGRpcmVjdGlvbjogYW55LCBhOiBhbnksIGI6IGFueSkge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTEgKiBkaXJlY3Rpb247XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsU29ydGVyIHtcblxuICBzdGF0aWMgc29ydChkYXRhOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZywgY3VzdG9tQ29tcGFyZT86IEZ1bmN0aW9uKTogQXJyYXk8YW55PiB7XG5cbiAgICBjb25zdCBkaXI6IG51bWJlciA9IChkaXJlY3Rpb24gPT09ICdhc2MnKSA/IDEgOiAtMTtcbiAgICBjb25zdCBjb21wYXJlOiBGdW5jdGlvbiA9IGN1c3RvbUNvbXBhcmUgPyBjdXN0b21Db21wYXJlIDogY29tcGFyZVZhbHVlcztcblxuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBjb21wYXJlLmNhbGwobnVsbCwgZGlyLCBhW2ZpZWxkXSwgYltmaWVsZF0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=